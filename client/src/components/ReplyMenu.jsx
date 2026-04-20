import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
  acceptedPolicy: false
};

export default function ReplyMenu({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!form.name || !form.email || !form.message || !form.acceptedPolicy) {
      setStatus({ type: 'error', message: 'Vul alle verplichte velden in en accepteer de privacyvoorwaarden.' });
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Er ging iets mis.');
      }

      setForm(initialForm);
      setStatus({ type: 'success', message: 'Bericht verstuurd. We nemen snel contact met je op.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Er ging iets mis bij het versturen.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 backdrop-blur-sm z-50"
        >
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto flex h-full w-[90%] md:w-[70%] lg:w-[50%] flex-col border-l bg-white px-7 py-2 backdrop-blur-xl justify-between"
          >
            <div className="mb-6 flex items-center justify-end">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex p-1 font-semibold items-center justify-center rounded-lg border border-black bg-white"
                aria-label="Close reply"
              >
                Sluit
              </button>
            </div>
            <div className="inline-flex text-5xl font-bold items-center justify-start">
                Leave us a message
            </div>
            <motion.form onSubmit={handleSubmit} className="flex flex-col justify-between h-full rounded-sm py-5 gap-2">
                <div className="flex flex-col gap-1 text-sm">
                    <p className="">Voor- en achternaam *</p>
                    <input className="input placeholder:text-gray-500" value={form.name} onChange={(e) => updateField('name', e.target.value)} placeholder="Wie ben je?" />
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <p className="">E-mail *</p>
                    <input className="input placeholder:text-gray-500" type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} placeholder="Hoe kunnen we je bereiken?" />
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <p className="">Telefoonnummer</p>
                    <input className="input placeholder:text-gray-500" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="Je telefoonnummer (ais je liever belt dan malit)" />
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <p className="">Bericht *</p>
                    <textarea rows={5} className="input placeholder:text-gray-500" value={form.message} onChange={(e) => updateField('message', e.target.value)} placeholder="Vertel ons wat ze zoekt (of gewoon lets leuks)" />
                </div>
                <div>
                    <label className="flex items-center gap-3 text-sm">
                        <input type="checkbox" checked={form.acceptedPolicy} onChange={(e) => updateField('acceptedPolicy', e.target.checked)} className="h-4 w-4 rounded border-white/20 bg-transparent" />
                        Ik accepteer de Privacyvoorwaarden *
                    </label>
                </div>
                <div className="flex items-center gap-3">
                    <button type="submit" disabled={submitting} className="rounded-lg bg-orange-500 px-4 py-2 text-white text-sm font-bold text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60">
                        {submitting ? 'Bezig...' : 'Verstuur bericht'}
                    </button>
                    <p className="font-semibold">Of bel <a className="text-orange-500 hover:underline" href="">+31 6 1533 7496</a></p>
                </div>
            </motion.form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
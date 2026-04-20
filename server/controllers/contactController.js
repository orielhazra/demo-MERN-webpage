import ContactMessage from '../models/ContactMessage.js';

export async function createContactMessage(req, res, next) {
  try {
    const { name, email, phone, message, acceptedPolicy } = req.body;

    if (!name || !email || !message || acceptedPolicy !== true) {
      return res.status(400).json({
        message: 'Name, email, message, and accepted privacy policy are required.'
      });
    }

    const created = await ContactMessage.create({
      name,
      email,
      phone,
      message,
      acceptedPolicy
    });

    return res.status(201).json({
      message: 'Contact message saved successfully.',
      id: created._id
    });
  } catch (error) {
    return next(error);
  }
}

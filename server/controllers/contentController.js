const homeContent = {
  hero: {
    badge: 'Social-first content agency',
    title: ['Get Hyped.', 'Get Noticed.', 'Get Results.'],
    description:
      'Klaar met gokken op content die niets oplevert? Wij maken content die opvalt, blijft hangen en jouw doelgroep in beweging brengt.'
  },
  stats: [
    { value: '10M+', label: 'Organische views', sub: 'Groei door slimme content' },
    { value: '30+', label: 'Merken geholpen', sub: 'Van start-up tot multinational' }
  ],
  about: {
    heading: 'Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt.',
    body:
      'We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.'
  },
  expertise: [
    {
      step: '01',
      title: 'Social strategy',
      headline: 'Slimme strategie. Sterke start.',
      body: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die impact maken.',
      cta: 'Meer over social strategie'
    },
    {
      step: '02',
      title: 'Content creation',
      headline: 'Content die opvalt en raakt.',
      body: 'We maken content die opvalt, blijft hangen en jouw doelgroep raakt. Creatief, snel en altijd met een duidelijk doel.',
      cta: 'Meer over content creatie'
    },
    {
      step: '03',
      title: 'Activation',
      headline: 'Zichtbaar waar en wanneer het telt.',
      body: 'De juiste content verdient bereik. We verspreiden wat werkt waar jouw doelgroep daadwerkelijk kijkt en klikt.',
      cta: 'Meer over activatie'
    },
    {
      step: '04',
      title: 'Data',
      headline: 'Inzichten die impact maken.',
      body: 'We analyseren prestaties en sturen razendsnel bij. Zo wordt elke campagne slimmer en effectiever.',
      cta: 'Meer over data'
    }
  ],
  cases: [
    { id: 'case-1', title: 'Van nul naar vol, binnen 3 weken · Bullit' },
    { id: 'case-2', title: 'Zacht in smaak, sterk in beeld · Roasta' },
    { id: 'case-3', title: 'Content die écht smaakt (en raakt) · Loco' }
  ],
  brands: ['BULLIT', 'ROASTA', 'LOCO', 'STUDIO SIX', 'NOVA', 'VYBE', 'KODA', 'FRAME', 'MOTION', 'PULSE'],
  contact: {
    email: 'info@gethyped.nl',
    phone: '+31 6 1533 7496',
    address: 'Beltrumsestraat 6, 7141 AL Groenlo'
  }
};

export function getHomeContent(_req, res) {
  res.json(homeContent);
}

export function getCases(_req, res) {
  res.json(homeContent.cases);
}

export function getBrands(_req, res) {
  res.json(homeContent.brands);
}

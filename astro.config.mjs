import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ipi-lipy.local',
  server: { host: true },
  integrations: [
    starlight({
      title: 'IPI LIPY',
      description: 'Digital ATS Operations Manual — Ancona Falconara',
      defaultLocale: 'it',
      locales: {
        root: { label: 'Italiano', lang: 'it' }
      },
      customCss: [
        './src/styles/fonts.css',
        './src/styles/tokens.css',
        './src/styles/base.css',
        './src/styles/components.css',
        './src/styles/tables.css',
        './src/styles/print.css'
      ],
      components: {
        Header: './src/components/Header.astro',
        PageTitle: './src/components/PageTitle.astro',
        Hero: './src/components/Hero.astro',
        Pagination: './src/components/Pagination.astro'
      },
      lastUpdated: false,
      credits: false,
      social: [],
      sidebar: [
        {
          label: 'GENERALITÀ',
          items: [
            { label: '01 · Area di responsabilità e spazio aereo', slug: '01-area-responsabilita-spazio-aereo' },
            { label: '02 · Procedure generali e coordinamenti', slug: '02-procedure-generali-e-coordinamenti' },
            { label: '03 · MET, ATFCM, NOTAM e FPL', slug: '03-informazioni-met-atfcm-notam-fpl' }
          ]
        },
        {
          label: 'TRAFFICO AL SUOLO',
          items: [
            { label: '04 · Piazzali e push-back', slug: '04-piazzali-e-pushback' },
            { label: '05 · Area di manovra, agibilità', slug: '05-area-di-manovra-agibilita-ispezioni' },
            { label: '06 · Pista, aeromobili, veicoli', slug: '06-pista-aeromobili-veicoli-lavori' },
            { label: '07 · AWO, RAVP e LVP', slug: '07-awo-ravp-lvp' }
          ]
        },
        {
          label: 'TRAFFICO IN VOLO',
          items: [
            { label: '08 · Circuito e separazioni', slug: '08-circuito-e-separazioni' },
            { label: '09 · Arrivi, partenze e coordinamenti', slug: '09-arrivi-partenze-e-coordinamenti' },
            { label: '10 · Attività particolari e voli speciali', slug: '10-attivita-particolari-e-voli-speciali' }
          ]
        },
        {
          label: 'DEGRADO',
          items: [
            { label: '11 · Degrado e indisponibilità sistemi', slug: '11-degrado-e-indisponibilita-sistemi' }
          ]
        }
      ]
    })
  ]
});

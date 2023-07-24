export default [
  {
    wrapper: document.querySelector('.about-section'),
    values: {
      logo: {
        opac_in: [0, 1, { start: 0, end: 0.2 }],
        tranY_in: [35, 0, { start: 0, end: 0.2 }],
        opac_out: [1, 0, { start: 0.5, end: 0.7 }],
        tranY_out: [0, -35, { start: 0.5, end: 0.7 }],
      },
      title: {
        opac_in: [0, 1, { start: 0.1, end: 0.3 }],
        tranY_in: [35, 0, { start: 0.1, end: 0.3 }],
        opac_out: [1, 0, { start: 0.6, end: 0.8 }],
        tranY_out: [0, -35, { start: 0.6, end: 0.8 }],
      },
      desc: {
        opac_in: [0, 1, { start: 0.2, end: 0.4 }],
        tranY_in: [35, 0, { start: 0.2, end: 0.4 }],
        opac_out: [1, 0, { start: 0.62, end: 0.82 }],
        tranY_out: [0, -35, { start: 0.62, end: 0.82 }],
      },
    },
    objs: {
      logo: document.querySelector('.no-dorco-about__logo'),
      title: document.querySelector('.no-dorco-about__title'),
      desc: document.querySelector('.no-dorco-about__desc'),
    },
  },
  {
    wrapper: document.querySelector('.year-section'),
    values: {
      one: {
        opac_in: [0, 1, { start: 0, end: 0.1 }],
        tranY_in: [100, 0, { start: 0, end: 0.1 }],
        opac_out: [1, 0, { start: 0.5, end: 0.6 }],
        tranY_out: [0, -100, { start: 0.5, end: 0.6 }],
      },
      two: {
        opac_in: [0, 1, { start: 0.05, end: 0.15 }],
        tranY_in: [100, 0, { start: 0.05, end: 0.15 }],
        opac_out: [1, 0, { start: 0.55, end: 0.65 }],
        tranY_out: [0, -100, { start: 0.55, end: 0.65 }],
      },
      three: {
        opac_in: [0, 1, { start: 0.1, end: 0.2 }],
        tranY_in: [100, 0, { start: 0.1, end: 0.2 }],
        opac_out: [1, 0, { start: 0.6, end: 0.7 }],
        tranY_out: [0, -100, { start: 0.6, end: 0.7 }],
      },
      four: {
        opac_in: [0, 1, { start: 0.15, end: 0.25 }],
        tranY_in: [100, 0, { start: 0.15, end: 0.25 }],
        opac_out: [1, 0, { start: 0.65, end: 0.75 }],
        tranY_out: [0, -100, { start: 0.65, end: 0.75 }],
      },
      text: {
        opac_in: [0, 1, { start: 0.25, end: 0.35 }],
        tranY_in: [35, 0, { start: 0.25, end: 0.35 }],
        opac_out: [1, 0, { start: 0.55, end: 0.65 }],
        tranY_out: [0, -35, { start: 0.55, end: 0.65 }],
      },
    },
    objs: {
      one: document.querySelector('.no-yearChar-1'),
      two: document.querySelector('.no-yearChar-2'),
      three: document.querySelector('.no-yearChar-3'),
      four: document.querySelector('.no-yearChar-4'),
      text: document.querySelector('.no-year-middle-text'),
      circle: document.querySelector('.no-yearCircle'),
    },
  },
];

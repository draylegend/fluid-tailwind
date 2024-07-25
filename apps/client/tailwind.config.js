import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    extract,
  ],
  theme: {
    fontSize,
    screens,
  },
  plugins: [fluid],
};

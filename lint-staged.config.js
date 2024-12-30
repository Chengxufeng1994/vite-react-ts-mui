export default {
  '**/*.{css}': ['npm run stylelint:fix'],
  '**/*.{js,jsx,ts,tsx}': ['npm run lint -- --max-warnings=0', 'npm run format'],
  '**/*.{html,json,css,scss,md,mdx}': ['npm run format:fix'],
};

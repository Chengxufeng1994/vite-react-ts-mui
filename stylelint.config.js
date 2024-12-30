export default {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules', 'at-rules'],
    'order/properties-alphabetical-order': true,
  },
};

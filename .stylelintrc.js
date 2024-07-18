module.exports = {
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  processors: [['@mapbox/stylelint-processor-arbitrary-tags', { fileFilterRegex: [/\.vue$/] }]],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'color-function-notation': 'legacy',
    'declaration-empty-line-before': null,
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['unquote', 'floor', 'lighten', 'darken']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep']
      }
    ]
  }
}
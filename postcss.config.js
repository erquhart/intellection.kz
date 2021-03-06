module.exports = config => [
  require('stylelint')({}),
  require('postcss-cssnext')({
    browsers: 'last 2 versions',
    features: {
      customProperties: {
        variables: {
          maxWidth: '60rem',
          colorPrimary: '#51a9f2',
          colorPrimaryLight: '#badbfa',
          colorPrimaryDark: '#107491',
          colorSecondaryDark: '#22846C',
          colorSecondary: '#46BE77',
          colorNeutralDark: '#111',
          colorNeutral: '#8C8D91',
          colorNeutralLight: '#FBFCFC',
          colorText: '#555',
        },
      },
    },
  }),
  require('postcss-reporter')(),
  ...(!config.production ? [require('postcss-browser-reporter')()] : []),
];

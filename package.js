const version = '0.4.7';

Package.describe({
  name: 'akasha:adm-zip',
  version: version,
  // Brief, one-line summary of the package.
  summary: 'adm-zip package wrapped for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/AkashaProject/meteor-adm-zip',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'adm-zip':  version
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('adm-zip.js', 'server');
  api.export('AdmZip', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('akasha:adm-zip');
  api.addFiles('adm-zip-tests.js');
});

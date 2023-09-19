const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  welcome() {
    this.log('Welcome to the Generator!');
  }

  writing() {
    this.fs.copy(this.templatePath('.github'), this.destinationPath('.github'));
    this.fs.copy(this.templatePath('.husky'), this.destinationPath('.husky'));
    this.fs.copy(this.templatePath('public'), this.destinationPath('public'));
    this.fs.copy(this.templatePath('release'), this.destinationPath('release'));
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
    this.fs.copy(this.templatePath('.editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('.eslintignore'), this.destinationPath('.eslintignore'));
    this.fs.copy(this.templatePath('.eslintrc.cjs'), this.destinationPath('.eslintrc.cjs'));
    this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('.prettierignore'), this.destinationPath('.prettierignore'));
    this.fs.copy(this.templatePath('.prettierrc'), this.destinationPath('.prettierrc'));
    this.fs.copy(this.templatePath('package.json'), this.destinationPath('package.json'));
    this.fs.copy(this.templatePath('README.md'), this.destinationPath('README.md'));
    this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
    this.fs.copy(this.templatePath('tsconfig.node.json'), this.destinationPath('tsconfig.node.json'));
    this.fs.copy(this.templatePath('vite.config.ts'), this.destinationPath('vite.config.ts'));
  }

  end() {
    this.log(' ');
    this.log('Finished generating! ');
  }
};

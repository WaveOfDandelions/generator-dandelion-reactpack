const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  welcome() {
    this.log('Welcome to the Generator!');
  }

  async prompting() {
    const { projectName } = await this.prompt({
      type: 'input',
      name: 'projectName',
      message: 'Enter Your project name (keep it lowercase):',
    });

    this.projectName = String.prototype.toLowerCase.call(projectName);
  }

  writing() {
    copyTemplates(this, { projectName: this.projectName });
  }

  end() {
    this.log('');
    this.log('Generator installed, wait until dependencies will install!');
    this.log('');
    this.log('Run - npm run dev after installing dependencies!');
    this.log('');
    this.log('Enjoy!!!');
  }
};

function copyTemplates(generator, config) {
  const templatePath = generator.templatePath('**/*');
  const destPath = generator.destinationPath();
  generator.fs.copyTpl(templatePath, destPath, config, {}, { globOptions: { dot: true } });
}

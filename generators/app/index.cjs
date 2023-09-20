const Generator = require('yeoman-generator');

const PackageManager = {
  pnpm: 'pnpm',
  npm: 'npm',
  yarn: 'yarn',
};

module.exports = class extends Generator {
  welcome() {
    this.log('Welcome to the Generator!');
  }

  constructor(args, opts) {
    super(args, opts);
    this.skipInstall = this.options['skip-install'];
  }

  async prompting() {
    const { projectName } = await this.prompt({
      type: 'input',
      name: 'projectName',
      message: 'Enter Your project name (keep it lowercase):',
    });

    this.projectName = String.prototype.toLowerCase.call(projectName);

    if (!this.skipInstall) {
      const { packageManager } = await this.prompt({
        type: 'list',
        name: 'packageManager',
        message: 'Choose your package manager:',
        choices: Object.keys(PackageManager),
      });
      this.packageManager = packageManager;
    }
  }

  writing() {
    copyTemplates(this, { projectName: this.projectName });
  }

  install() {
    if (!this.skipInstall && this.packageManager) {
      this.env.options.nodePackageManager = this.packageManager;
    }
  }

  end() {
    this.log('');
    this.log('Generator installed');
    this.log('');
    this.log('Run - npm run dev after installing!');
    this.log('');
    this.log('Enjoy!!!');
  }
};

function copyTemplates(generator, config) {
  const templatePath = generator.templatePath('**/*');
  const destPath = generator.destinationPath();
  generator.fs.copyTpl(templatePath, destPath, config, {}, { globOptions: { dot: true } });
}

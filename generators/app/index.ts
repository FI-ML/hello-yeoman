import * as Generator from 'yeoman-generator';
import * as yosay from 'yosay';
import *  as _ from 'lodash';

export default class extends Generator {

    answers: { username: string; projectName: string; projectDescription: string}

    constructor(args, options) {
        super(args, options);

        this.option('welcome', {
            description: 'Should show an welcome message.',
            type: Boolean,
            default: false
        });
    }

    async prompting() {

        {
            this.answers = await this.prompt([
                {
                    type: 'input',
                    name: 'username',
                    message: 'What`s your name?',
                    default: this.config.get('username') || 'firstname.lastname'
                },

                {
                    type: 'input',
                    name: 'projectName',
                    message: 'Pleace enter your project name',
                    default: 'your-project-name'
                },

                {
                    type: 'input',
                    name: 'projectDescription',
                    message: 'description ?',
                    default: this.config.get('description') || 'description ?'
                }
            ]);

            this.config.set('username', this.answers.username);
            this.config.set('description',this.answers.projectDescription);
            this.config.save();
        }
    }


    writing() {
        //dynamics

        this.fs.copyTpl(this.templatePath('_docker-compose.yml'),
            this.destinationPath(`${this.answers.projectName}/docker/docker-compose.yml`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });


        this.fs.copyTpl(this.templatePath('_env.validation.ts'),
            this.destinationPath(`${this.answers.projectName}/src/config/validations/env.validation.ts`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_logger.middleware.ts'),
            this.destinationPath(`${this.answers.projectName}/src/common/logger/logger.middleware.ts`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });


        this.fs.copyTpl(this.templatePath('_app.module.ts'),
            this.destinationPath(`${this.answers.projectName}/src/app.module.ts`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_main.ts'),
            this.destinationPath(`${this.answers.projectName}/src/main.ts`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_README.md'),
            this.destinationPath(`${this.answers.projectName}/README.md`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_package.json'),
            this.destinationPath(`${this.answers.projectName}/package.json`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_.env'),
            this.destinationPath(`${this.answers.projectName}/.env`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_Dockerfile'),
            this.destinationPath(`${this.answers.projectName}/Dockerfile`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_.eslintrc.js'),
            this.destinationPath(`${this.answers.projectName}/main.ts`), {
                appname: this.answers.projectName,
                username: this.answers.username
            });

        this.fs.copyTpl(this.templatePath('_.gitignore'),
            this.destinationPath(`${this.answers.projectName}/.gitignore`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_.prettierrc'),
            this.destinationPath(`${this.answers.projectName}/.prettierrc`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_nest-cli.json'),
            this.destinationPath(`${this.answers.projectName}//nest-cli.json`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_tsconfig.build.json'),
            this.destinationPath(`${this.answers.projectName}/tsconfig.build.json`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_tsconfig.json'),
            this.destinationPath(`${this.answers.projectName}/tsconfig.json`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });

        this.fs.copyTpl(this.templatePath('_yarn.lock'),
            this.destinationPath(`${this.answers.projectName}/yarn.lock`), {
                appname: this.answers.projectName,
                username: this.answers.username,
                description: this.answers.projectDescription
            });
    }
}


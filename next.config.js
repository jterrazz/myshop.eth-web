require('dotenv').config(); // loads environment variables from a .env file
const config = require('config'); // gets data from the root config folder https://github.com/lorenwest/node-config/wiki
const Joi = require('joi');
const packageJson = require('./package.json');

const _buildAndVerifyConfigFromYml = (ymlSection, joiSchema) => {
    const configFromYml = config.get(ymlSection);
    const { error, value: envValues } = joiSchema.validate(configFromYml);
    if (error) {
        console.error(`[config] Environment variable error: ${error.message}`);
        process.exit(1);
    }
    return envValues;
};

// Config objects

const appConfig = _buildAndVerifyConfigFromYml(
    'app',
    Joi.object({
        env: Joi.string().required(),
        seo: Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
        }),
        api: Joi.object({
            host: Joi.string().required(),
            routes: Joi.object().required(),
        }),
        router: Joi.object().required(),
        assets: Joi.object().required(),
    }).required(),
);

module.exports = {
    distDir: '.next',
    target: 'serverless',
    excludeFile: (file) => {
        return true;
        return /\*.{spec,test,stories}.js/.test(file);
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        version: packageJson.version,
        app: appConfig,
    },
};

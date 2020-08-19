const sharedRules = require('../webpack/shared-rules');

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
    ],
    "addons": [
        'storybook-addon-themes',
        {
            name: '@storybook/addon-essentials',
            options: {
                viewport: false,
                backgrounds: false,
                actions: false,
                controls: false,
            }
        }
    ],
    webpackFinal: (config) => {
        const fileLoaderRule = config.module.rules.find(rule => rule.test.test && rule.test.test('.svg'));
        fileLoaderRule.exclude = /\.svg$/;

        config.module.rules.unshift(sharedRules.sass({
            loader: 'style-loader'
        }));

        config.module.rules.unshift(sharedRules.reactSvg);
        config.module.rules.unshift(sharedRules.cssSvg);

        return config;
    },
}

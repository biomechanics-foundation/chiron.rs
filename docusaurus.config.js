// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Chiron',
    tagline: 'A Community-driven Biomechanics Software Project',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://chiron.rs',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'biomechanics-foundation', // Usually your GitHub org/user name.
    projectName: 'chiron.rs', // Usually your repo name.
    deploymentBranch: 'main',
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                blog: false,
                //{
                //    showReadingTime: true,
                //},
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            image: 'img/chiron-social-card.jpg',
            navbar: {
                title: 'Chiron',
                logo: {
                    alt: 'Chiron Logo',
                    src: 'img/chiron-logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'User Guide',
                    },
                    {
                        href: '/docs/dev/intro',
                        label: "Developer Guide",
                        position: 'left',
                    },
                    {
                        href: '/crates',
                        label: 'Crates',
                        position: 'left',
                    },
                    {
                        href: '/about',
                        label: 'About',
                        position: 'left',
                    },
                    //{ to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://github.com/biomechanics-foundation/chiron',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'User Guide',
                                to: '/docs/user/intro',
                            },
                            {
                                label: "Developer Guide",
                                to: '/docs/dev/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/chiron',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            // {
                            //     label: 'Blog',
                            //     to: '/blog',
                            // },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/biomechanics-foundation/chiron',
                            },
                            {
                                label: 'About',
                                to: '/about',
                            },
                        ],
                    },
                ],
                copyright: `Project led by the Biomechanics Foundation`,
            },
        }),
};

module.exports = config;

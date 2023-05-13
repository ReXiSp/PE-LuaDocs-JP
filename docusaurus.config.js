// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '日本人向け Psych Engine Lua API',
  tagline: 'PE Lua API',
  favicon: 'img/logo.webp',

  // Set the production url of your site here
  url: 'https://rexisp.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/PE-LuaDocs-JP',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ReXiSp', // Usually your GitHub org/user name.
  projectName: 'JP-PsychEngine-Lua-Documents', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'jp',
    locales: ['jp'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
        },
        blog: false,
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '日本人向け Psych Engine Lua API ドキュメント',
        logo: {
          alt: 'PE Lua Document',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: 'ホーム',
                to: '/',
              },
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Discord: Psych Engine (英語)',
                href: 'https://discord.gg/psychengine',
              },
              {
                label: 'Discord: 日本人がPsychEngineの知識を深め...',
                href: 'https://discord.gg/eUbuuNnHqw',
              },
              {
                label: 'Discord: 日本人向けFNFMOD制作鯖',
                href: 'https://discord.gg/7N4ucGNy5W',
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'Psych Engine GitHub',
                href: 'https://github.com/ShadowMario/FNF-PsychEngine',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tombuntu, Psych Engine by ShadowMario, Funkin by FunkinCrew`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

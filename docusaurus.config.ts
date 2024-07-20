import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Create Mod Docs',
  tagline: 'Documentation for modding, editor plugins & texturepacks',
  favicon: 'img/favicon.ico',

  url: 'https://docs.createmod.io',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/CMCreateMod/docs-createmod-io/tree/main/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Create Mod logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Introduction',
        },
        {
          href: 'https://github.com/cmcreatemod/docs-createmod-io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/introduction',
            },
          ],
        },*/
        {
          title: 'Socials',
          items: [
            {
              label: 'YouTube',
              href: 'https://go.createmod.io/youtube',
            },
            {
              label: 'Twitter',
              href: 'https://go.createmod.io/twitter',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://go.createmod.io/discord',
            },
            {
              label: 'Patreon',
              href: 'https://go.createmod.io/patreon',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://go.createmod.io/github',
            },
            {
              label: 'Donate',
              href: 'https://go.createmod.io/patreon',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Create Mod`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cell Machine Create Mod Docs',
  tagline: 'Documentation for modding, editor plugins & texturepacks',
  favicon: 'img/favicon.png',

  url: 'https://docs.createmod.io',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: "script",
      attributes: {
        src: "https://createmod.io/uts.js",
        "data-website-id": "c0e02720-a1d3-4493-b150-baf62f9edcf1"
      }
    }
  ],

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
    navbar: {
      title: "Docs",
      logo: {
        alt: 'Create Mod logo',
        src: 'img/icon.webp',
      },
      items: [
        {
          href: 'https://createmod.io',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/cmcreatemod/docs-createmod-io',
          label: 'Contribute',
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
              label: 'Privacy',
              href: 'https://createmod.io/legal/privacy',
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
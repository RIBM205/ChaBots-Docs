import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '16a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'df4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f84'),
            routes: [
              {
                path: '/docs/category/soccer-ligthweigth-2024',
                component: ComponentCreator('/docs/category/soccer-ligthweigth-2024', '9d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Soccer-Ligthweigth-2024/Introduccion',
                component: ComponentCreator('/docs/Soccer-Ligthweigth-2024/Introduccion', '24f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Soccer-Ligthweigth-2024/mecanica',
                component: ComponentCreator('/docs/Soccer-Ligthweigth-2024/mecanica', 'c3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

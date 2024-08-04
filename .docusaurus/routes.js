import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ChaBots-Docs/blog',
    component: ComponentCreator('/ChaBots-Docs/blog', 'd14'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/blog/archive',
    component: ComponentCreator('/ChaBots-Docs/blog/archive', '582'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/blog/first-blog-post',
    component: ComponentCreator('/ChaBots-Docs/blog/first-blog-post', 'ae0'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/blog/long-blog-post',
    component: ComponentCreator('/ChaBots-Docs/blog/long-blog-post', '931'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/blog/mdx-blog-post',
    component: ComponentCreator('/ChaBots-Docs/blog/mdx-blog-post', 'dcd'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/blog/tags',
    component: ComponentCreator('/ChaBots-Docs/blog/tags', '9c3'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/blog/tags/docusaurus',
    component: ComponentCreator('/ChaBots-Docs/blog/tags/docusaurus', '3de'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/blog/tags/facebook',
    component: ComponentCreator('/ChaBots-Docs/blog/tags/facebook', 'f2e'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/blog/tags/hello',
    component: ComponentCreator('/ChaBots-Docs/blog/tags/hello', '563'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/blog/tags/hola',
    component: ComponentCreator('/ChaBots-Docs/blog/tags/hola', '84d'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/blog/welcome',
    component: ComponentCreator('/ChaBots-Docs/blog/welcome', '8e5'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/markdown-page',
    component: ComponentCreator('/ChaBots-Docs/markdown-page', 'cff'),
    exact: true
  },
  {
    path: '/ChaBots-Docs/docs',
    component: ComponentCreator('/ChaBots-Docs/docs', '45e'),
    routes: [
      {
        path: '/ChaBots-Docs/docs',
        component: ComponentCreator('/ChaBots-Docs/docs', 'ed9'),
        routes: [
          {
            path: '/ChaBots-Docs/docs',
            component: ComponentCreator('/ChaBots-Docs/docs', '271'),
            routes: [
              {
                path: '/ChaBots-Docs/docs/category/soccer-ligthweigth-2024',
                component: ComponentCreator('/ChaBots-Docs/docs/category/soccer-ligthweigth-2024', '700'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/category/tutorial---basics',
                component: ComponentCreator('/ChaBots-Docs/docs/category/tutorial---basics', '69b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/category/tutorial---extras',
                component: ComponentCreator('/ChaBots-Docs/docs/category/tutorial---extras', '2ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/hello',
                component: ComponentCreator('/ChaBots-Docs/docs/hello', '713'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/intro',
                component: ComponentCreator('/ChaBots-Docs/docs/intro', 'b3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/Soccer-Ligthweigth-2024/Introduccion',
                component: ComponentCreator('/ChaBots-Docs/docs/Soccer-Ligthweigth-2024/Introduccion', 'f05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/ChaBots-Docs/docs/tutorial-basics/congratulations', '5ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/ChaBots-Docs/docs/tutorial-basics/create-a-blog-post', 'b9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/ChaBots-Docs/docs/tutorial-basics/create-a-document', 'b7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/ChaBots-Docs/docs/tutorial-basics/create-a-page', '80a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/ChaBots-Docs/docs/tutorial-basics/deploy-your-site', '4e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/ChaBots-Docs/docs/tutorial-basics/markdown-features', 'd2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/ChaBots-Docs/docs/tutorial-extras/manage-docs-versions', 'eb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChaBots-Docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/ChaBots-Docs/docs/tutorial-extras/translate-your-site', 'e71'),
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
    path: '/ChaBots-Docs/',
    component: ComponentCreator('/ChaBots-Docs/', '1c9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

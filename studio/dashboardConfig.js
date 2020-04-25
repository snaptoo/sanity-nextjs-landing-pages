export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea4b8942e556c580ca8eb06',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dtjjppik',
                  apiId: 'df322406-6e85-4500-839c-061dc10b984b'
                },
                {
                  buildHookId: '5ea4b894d4cde221c169d214',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xpgtv8p4',
                  apiId: '5f90027c-6575-483c-8d21-5a8d8374e095'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/snaptoo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xpgtv8p4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

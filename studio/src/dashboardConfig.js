export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6047f887621dd311eac8f1e7',
                  title: 'Sanity Studio',
                  name: 'kill-your-servers-studio',
                  apiId: 'e7de02ad-af5d-4be3-9495-554d41df77f4'
                },
                {
                  buildHookId: '6047f887bbe1200c42d32ff9',
                  title: 'Blog Website',
                  name: 'kill-your-servers',
                  apiId: 'b52558fc-e4a8-45f0-966e-2ccefa0f6ee7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alligatormonday/Kill_Your_Servers',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://kill-your-servers.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

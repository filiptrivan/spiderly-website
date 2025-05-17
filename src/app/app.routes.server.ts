import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'docs/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const slugs = ['getting-started', 'attributes'];
      return slugs.map(slug => ({ slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

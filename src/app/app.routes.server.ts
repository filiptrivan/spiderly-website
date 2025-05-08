import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'playground', renderMode: RenderMode.Prerender },
  { path: 'faq', renderMode: RenderMode.Prerender },
  {
    path: '404',
    renderMode: RenderMode.Server, // FT: So we can set status 404
    status: 404,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
    status: 404,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate' // FT: If we make the page which didn't exist, we want to show it
    }
  }
];

import { Route } from '@angular/router';
import { MainComponent } from '@pages/main/main.component';

export const routes: Route[] = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/book/book.component').then((c) => c.BookComponent),
  },
];

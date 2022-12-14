import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'editor',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      // {
      //   path: 'editor',
      //   loadChildren: () =>
      //     import('./pages/editor/editor.module').then(
      //       (m) => m.EditorModule
      //     ),
      // },
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about/about.module').then((m) => m.AboutModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

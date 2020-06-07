import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'course',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path:'page/:slug',
    loadChildren: () => import('./static-pages/static-pages.module').then(m => m.StaticPagesModule)
  },{
    path:'page/contact',
    loadChildren: () => import('./static-pages/static-pages.module').then(m => m.StaticPagesModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

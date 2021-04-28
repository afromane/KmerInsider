import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list-categorie',
    loadChildren: () => import('./pages/list-categorie/list-categorie.module').then( m => m.ListCategoriePageModule)
  },
  {
    path: 'difficulte',
    loadChildren: () => import('./pages/difficulte/difficulte.module').then( m => m.DifficultePageModule)
  },
  {
    path: 'facile',
    loadChildren: () => import('./pages/question/facile/facile.module').then( m => m.FacilePageModule)
  },
  {
    path: 'normale',
    loadChildren: () => import('./pages/question/normale/normale.module').then( m => m.NormalePageModule)
  },
  {
    path: 'difficile',
    loadChildren: () => import('./pages/question/difficile/difficile.module').then( m => m.DifficilePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./admin/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'question-reponse',
    loadChildren: () => import('./admin/question-reponse/question-reponse.module').then( m => m.QuestionReponsePageModule)
  },
  {
    path: 'cours',
    loadChildren: () => import('./admin/cours/cours.module').then( m => m.CoursPageModule)
  },
  {
    path: 'categorie-modal',
    loadChildren: () => import('./modal/categorie-modal/categorie-modal.module').then( m => m.CategorieModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

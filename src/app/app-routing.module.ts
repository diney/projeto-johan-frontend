import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },  
  {
    path: 'cadastro/marca',
    loadChildren: () => import('./cadastro/marca/marca.module').then( m => m.MarcaPageModule)    
  }, 
  {
    path: 'cadastro/marca/:id',
    loadChildren: () => import('./cadastro/nova-marca/nova-marca.module').then( m => m.NovaMarcaPageModule)
  },
  {
    path: 'nova-marca',
    loadChildren: () => import('./cadastro/nova-marca/nova-marca.module').then( m => m.NovaMarcaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

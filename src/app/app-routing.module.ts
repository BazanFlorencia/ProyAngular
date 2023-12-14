import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MelomanosCatalogueComponent } from './melomanos-catalogue/melomanos-catalogue.component';
import { MelomanosContactComponent } from './melomanos-contact/melomanos-contact.component';

const routes: Routes=[
  {
    path: '',
    redirectTo: 'catalogo',
    pathMatch: 'full'
  },
  {
    path: 'catalogo',
    component: MelomanosCatalogueComponent
  },
  {
    path: 'contacto',
    component: MelomanosContactComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

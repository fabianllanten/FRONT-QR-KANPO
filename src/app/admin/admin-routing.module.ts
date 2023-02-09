import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes: Routes = [
  {
    path:'perfil',
    component:PerfilComponent
  },
  {
    path:'ventas',
    component:VentasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

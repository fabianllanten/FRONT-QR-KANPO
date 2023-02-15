import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    PerfilComponent,
    VentasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    HttpClientModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UnidadesComponent } from './unidades/unidades.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"consumo",component:ConsumoComponent},
  {path:"unidades",component:UnidadesComponent},
  {path:"cadastro",component:CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

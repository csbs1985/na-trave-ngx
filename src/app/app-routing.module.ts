import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjustePlacarComponent } from './ajuste-placar/ajuste-placar.component';
import { BuscarPartidaComponent } from './buscar-partida/buscar-partida.component';
import { PartidaComponent } from './partida/partida.component';
import { PlacarComponent } from './placar/placar.component';
import { PrincipalComponent } from './principal/principal.component';
import { SelecionarEquipeComponent } from './selecionar-equipe/selecionar-equipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'partida', component: PartidaComponent },
  { path: 'ajuste-placar', component: AjustePlacarComponent },
  { path: 'placar', component: PlacarComponent },
  { path: 'selecionar-equipe', component: SelecionarEquipeComponent },
  { path: 'buscar-partida', component: BuscarPartidaComponent },
  { path: '*', component: PrincipalComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }

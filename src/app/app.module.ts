import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule } from '@ionic/angular';
import { CountdownModule } from 'ngx-countdown';
import { environment } from '../environments/environment';
import { AjustePlacarModule } from './ajuste-placar/ajuste-placar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarPartidaModule } from './buscar-partida/buscar-partida.module';
import { DefinirModule } from './definir/definir.module';
import { PartidaModule } from './partida/partida.module';
import { PlacarModule } from './placar/placar.module';
import { PrincipalModule } from './principal/principal.module';
import { SelecionarEquipeModule } from './selecionar-equipe/selecionar-equipe.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    PartidaModule,
    PlacarModule,
    SelecionarEquipeModule,
    PrincipalModule,
    DefinirModule,
    AppRoutingModule,
    RouterModule,
    AjustePlacarModule,
    CountdownModule,
    BuscarPartidaModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

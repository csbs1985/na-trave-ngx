import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefinirModule } from './definir/definir.module';
import { PartidaModule } from './partida/partida.module';
import { PlacarModule } from './placar/placar.module';
import { PrincipalModule } from './principal/principal.module';
import { SelecionarEquipeModule } from './selecionar-equipe/selecionar-equipe.module';
import { SharedModule } from './shared/shared.module';
import { SplashScreenModule } from './splash-screen/splash-screen.module';

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
    SplashScreenModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

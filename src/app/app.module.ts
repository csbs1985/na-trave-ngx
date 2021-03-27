import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components/components.module';
import { InterfacesModule } from './interfaces/interfaces/interfaces.module';
import { ServicesModule } from './services/services/services.module';
import { PartidaComponent } from './partida/partida.component';
import { SelecionarEquipeComponent } from './selecionar-equipe/selecionar-equipe.component';
import { PlacarComponent } from './placar/placar.component';


@NgModule({
  declarations: [
    AppComponent,
    PartidaComponent,
    SelecionarEquipeComponent,
    PlacarComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ComponentsModule,
    InterfacesModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

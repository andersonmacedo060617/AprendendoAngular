import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuTopoComponent } from './menu-topo/menu-topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from 'src/app.routes';
import { ItemVendaComponent } from './item-venda/item-venda.component';
import { MenuCategoriaComponent } from './menu-categoria/menu-categoria.component';
import { PainelOfertaComponent } from './painel-oferta/painel-oferta.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaEnderecoComponent } from './consulta-endereco/consulta-endereco.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuTopoComponent,
    RodapeComponent,
    ItemVendaComponent,
    MenuCategoriaComponent,
    PainelOfertaComponent,
    ConsultaEnderecoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { FormCalculoComponent } from './form-calculo/form-calculo.component';
import { TableCalculoComponent } from './table-calculo/table-calculo.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    FormCalculoComponent,
    TableCalculoComponent
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

import {Routes} from "@angular/router";
import { HomeComponent } from './app/home/home.component';
import { ConsultaEnderecoComponent } from './app/consulta-endereco/consulta-endereco.component';

export const ROUTES: Routes =[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'consultaEndereco', component: ConsultaEnderecoComponent}
    


]
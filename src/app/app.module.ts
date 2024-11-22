import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { ListarProgramasComponent} from './programas/listar-programas/listar-programas.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";


const rutas: Routes =[
  //{path: '', redirectTo: 'listar-programas', pathMatch: 'full'},
  {path: '', loadChildren: () => import('./programas/programas.module').then(m => m.ProgramasModule)},
]

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacultadesComponent } from './facultades/facultades.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacultadesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

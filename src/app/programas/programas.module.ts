import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProgramasRoutingModule} from './programas-routing.module';
import {ListarProgramasComponent} from './listar-programas/listar-programas.component';
import {ProgramaService} from './service/programa.service';
import {ReactiveFormsModule} from "@angular/forms";
import { CrearProgramaComponent } from './crear-programa/crear-programa.component';


@NgModule({
  declarations: [
    ListarProgramasComponent,
    CrearProgramaComponent
  ],
  imports: [
    CommonModule,
    ProgramasRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProgramaService],
  exports: [ListarProgramasComponent]
})
export class ProgramasModule { }

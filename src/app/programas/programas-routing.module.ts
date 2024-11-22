import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarProgramasComponent} from './listar-programas/listar-programas.component';
import {EditarProgramasComponent} from './editar-programas/editar-programas.component';
import {CrearProgramaComponent} from './crear-programa/crear-programa.component';

const routes: Routes = [
  { path: '', component: ListarProgramasComponent },
  { path: 'listar', component: ListarProgramasComponent },
  { path: 'editar/:id', component: EditarProgramasComponent },
  { path: 'crear', component: CrearProgramaComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramasRoutingModule { }

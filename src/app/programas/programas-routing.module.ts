import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarProgramasComponent} from './listar-programas/listar-programas.component';

const routes: Routes = [
  { path: '', component: ListarProgramasComponent },
  { path: 'listar', component: ListarProgramasComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramasRoutingModule { }

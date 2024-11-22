import {Component, OnInit} from '@angular/core';
import {ProgramaService} from '../service/programa.service';
import {Programa} from '../model/programa';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-listar-programas',
  templateUrl: './listar-programas.component.html',
  styleUrl: './listar-programas.component.css'
})
export class ListarProgramasComponent implements OnInit {
  programas: Array<Programa> = [];
  public nombrePrograma!: string;
  public programaSelect!: Programa;
  public selected: boolean = false;


  constructor(private programaService: ProgramaService, private routerPath: Router, private router: ActivatedRoute) {
    this.programaService.getProgramas().subscribe(
      (programa: Array<Programa>) => {
        this.programas = programa;
      }
    );
  }
  ngOnInit(): void {
    // Lista de programas de ejemplo

    //this.programas[0] = {idPrograma: 1, idFacultad: 1, nombrePrograma: 'Ingenieria de sistemas', snies: 123, descripcionPrograma: 'estudios de la tecnologia', imagenPrograma: '1.png'};
    //this.programas[1] = {idPrograma: 2, idFacultad: 2, nombrePrograma: 'Ingenieria ambiental', snies: 125, descripcionPrograma: 'estudios del medio ambiente', imagenPrograma: '2.png'};
    //this.programas[2] = {idPrograma: 3, idFacultad: 3, nombrePrograma: 'Ingenieria industrial', snies: 124, descripcionPrograma: 'estudios de la algo', imagenPrograma: '3.png'};
    //this.programas[3] = {idPrograma: 4, idFacultad: 4, nombrePrograma: 'Ingenieria electronica', snies: 121, descripcionPrograma: 'estudios de la tecnologia', imagenPrograma: '4.png'};
    //this.programas[4] = {idPrograma: 5, idFacultad: 5, nombrePrograma: 'Medicina', snies: 122, descripcionPrograma: 'estudios de la salud', imagenPrograma: '5.png'};
  }

  /**
   * Evento que se dispara al seleccionar un curso en la lista
   * @param curso Curso seleccionado
   */
  onSelected(programa: Programa) {
    this.programaSelect = programa;
    this.selected=true;
    // console.log(this.cursoSelected); //Imprime en la consola del navegador el programa seleccionado
    this.routerPath.navigate(['/editar/' + this.programaSelect.idPrograma]); //Redirecciona a la ruta /editar/:id
  }


  /**
   * Metodo que elimina un programa seleccionado de la lista
   * @param programa Programa a eliminar
   */
  borrarPrograma(programa: Programa): void {
    Swal.fire({
      title: "Esta seguro?",
      text: "Usted no puede revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borra el programa!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.programaService.borrarPrograma(programa.idPrograma).subscribe(() => { // Llama al servicio para eliminar el programa
          Swal.fire({
            title: "Eliminado!",
            text: "El programa ha sido eliminado.",
            icon: "success"
          });
          this.programas = this.programas.filter((c) => c !== programa); // Actualiza la lista de programas en la vista
        });
      }
    });
  }

  /**
   * Metodo que redirecciona a la ruta /crear
   */
  crearPrograma() {
    this.routerPath.navigate(['/programa/crear']);
  }



  // Función para dividir el arreglo en grupos
  groupProgramas(array: any[], size: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
}

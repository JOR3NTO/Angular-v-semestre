import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProgramaService} from "../service/programa.service";
import {Programa} from "../model/programa";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-programas',
  templateUrl: './editar-programas.component.html',
  styleUrl: './editar-programas.component.css'
})
export class EditarProgramasComponent {
  // Creamos e inicializamos el formulario editarProgramaForm usando el constructor de FormGroup
  public editarProgramaForm: FormGroup= new FormGroup({
    idPrograma: new FormControl('',[Validators.required,Validators.minLength(4)]),
    programa: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  // Creamos un atributo (relacion) curso que es el que vamos a editar
  public programa!: Programa;


  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de curso
   * @param cursoService Servicio de curso para crear un curso
   * @param route Ruta del componente
   */
  constructor(public router: Router, public formBuilder: FormBuilder, private programaService: ProgramaService, private route: ActivatedRoute) {

  }

  /**
   * Metodo que cancela la edicion de un curso
   */
  cancelarEditarPrograma() {
    this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
  }

  /**
   * Metodo que edita un curso en el servicio
   * @param programa Curso a crear
   */
  editarPrograma(programa: Programa) {
    this.programaService.editarPrograma(programa).subscribe( // Le decimos al servicio que edite el curso
      (programa: Programa) => {
        Swal.fire( // Le decimos al usuario que el curso ha sido editado
          'Programa editado',
          `El programa ${programa.nombrePrograma} ha sido actualizado con exito`,
          'success'
        );
        this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
      });
  }

  /**
   * Metodo que se ejecuta al iniciar el componente
   */
  ngOnInit(): void {
    const idPrograma = parseInt(this.route.snapshot.params['idPrograma']); // Obtenemos el id del curso a editar

    this.programaService.getPrograma(idPrograma).subscribe((programa) => { // Le decimos al servicio que nos traiga el curso a editar
      this.programa = programa; // Obtenemos el curso a editar
      console.log(this.programa); // Consola
      this.editarProgramaForm = this.formBuilder.group({ // Creamos el formulario editarCursoForm
        id: [this.programa.idPrograma, []], // mostramos el Id del programa. El id no se puede editar
        programa: [this.programa.nombrePrograma, [Validators.required, Validators.minLength(4)]], // Mostramos el nombre del programa
      });
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {Programa} from '../model/programa';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {ProgramaService} from "../service/programa.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-programa',
  templateUrl: './crear-programa.component.html',
  styleUrl: './crear-programa.component.css'
})
export class CrearProgramaComponent implements OnInit {

  public crearProgramaForm: FormGroup= new FormGroup({
    programa: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de programa
   * @param programaService Servicio de programa para crear un programa
   */
  constructor(public router: Router, public formBuilder: FormBuilder, private programaService: ProgramaService) {

  }

  /**
   * Metodo que crea un programa
   */
  cancelarCrearPrograma() {
    this.router.navigate(['/listar']);
  }

  /**
   * Metodo que crea un programa en el servicio
   * @param programa Programa a crear
   */
  crearPrograma(programa: Programa) {
    this.programaService.crearPrograma(programa).subscribe(
      (programa: Programa) => {
        Swal.fire(
          'Programa creado',
          `El programa ${programa.nombrePrograma} ha sido creado con exito`,
          'success'
        );
        this.crearProgramaForm.reset();  //Resetea el formulario
        this.router.navigate(['/Listar']);
      });
  }
//regexp: regular expression
  ngOnInit(): void {
    this.crearProgramaForm = this.formBuilder.group({
      programa: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
}

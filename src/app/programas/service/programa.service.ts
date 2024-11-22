import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Programa} from '../model/programa';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProgramaService {
  private baseUrl = '/api/programa-service';
  constructor(private httpClient: HttpClient) { }

  /**
   * Metodo que obtiene los programas
   * @returns Observable<Programa[]> Lista de programas
   */
  getProgramas(): Observable<Programa[]> {
    return this.httpClient.get<Programa[]>(`${this.baseUrl}/programas`)
      .pipe(
        map((result:any)=>{
          //console.log(result._embedded.programaes);
          return result;
        }));
  }

  /**
   * Metodo que obtiene un programa
   */
  getPrograma(idPrograma: number): Observable<Programa> {
    return this.httpClient.get<Programa>(`${this.baseUrl}/programas/${idPrograma}`);
  }

  /**
   * Metodo que crea un programa
   * @param programa Programa a crear
   */
  crearPrograma(programa: Programa): Observable<Programa> {
    return this.httpClient.post<Programa>(`${this.baseUrl}/programa`, programa);
  }

  /**
   * Metodo que edita un programa
   * @param programa Programao a editar
   */
  editarPrograma(programa: Programa): Observable<Programa> {
    return this.httpClient.put<Programa>(`${this.baseUrl}/programa/${programa.idPrograma}`, programa);
  }


  /**
   * Metodo que elimina un programa
   */
  borrarPrograma(idPrograma: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/programa/${idPrograma}`);
  }

}

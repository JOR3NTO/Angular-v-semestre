import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Programa} from '../model/programa';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProgramaService {
  private baseUrl = 'https://gist.githubusercontent.com';
  constructor(private httpClient: HttpClient) { }

  /**
   * Metodo que obtiene los programas
   * @returns Observable<Programa[]> Lista de programas
   */
  getProgramas(): Observable<Programa[]> {
    return this.httpClient.get<Programa[]>(this.baseUrl+"/BrosMan1414/38bc5b1c7bc25296e1fdfa24c2b729d7/raw/edf9314ff7e3e60f334fe4397f7e474fa9761ff7/gistfile1.txt")
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
    return this.httpClient.get<Programa>(this.baseUrl + '/programaes/' + idPrograma);
  }

  /**
   * Metodo que crea un programa
   * @param programa Programa a crear
   */
  crearPrograma(programa: Programa): Observable<Programa> {
    return this.httpClient.post<Programa>(this.baseUrl+"/programaes", programa);
  }

  /**
   * Metodo que edita un programa
   * @param programa Programao a editar
   */
  editarPrograma(programa: Programa): Observable<Programa> {
    return this.httpClient.put<Programa>(this.baseUrl+"/cursoes/"+programa.idPrograma, programa);
  }

  /**
   * Metodo que elimina un programa
   */
  borrarPrograma(idPrograma: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/programaes/" + idPrograma);
  }

}

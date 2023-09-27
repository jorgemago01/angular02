import { Component } from '@angular/core';
import { Alumno } from '../alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos: Alumno[] = [
    { nombre: 'Juan', edad: 25, promedio: 8.5 },
    { nombre: 'María', edad: 22, promedio: 7.8 },
    { nombre: 'Carlos', edad: 23, promedio: 9.2 },
    
  ];

}

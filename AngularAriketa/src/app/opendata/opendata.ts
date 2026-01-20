import { signal } from '@angular/core';
import { Component, inject } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-opendata',
  imports: [],
  templateUrl: './opendata.html',
  styleUrl: './opendata.css',
})
export class Opendata {

  cliente = inject(Cliente);
  data: any = signal(null);
  hola = "as";

  constructor() {
    this.hola = "hola";
    this.cliente.getEventos()
      .subscribe((response) => {
        this.data(response);
        console.log(this.data());
        console.log ("asdad")
      });
  }
}

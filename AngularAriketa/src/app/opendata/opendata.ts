import { signal } from '@angular/core';
import { Component, inject } from '@angular/core';
import { Cliente } from '../cliente';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-opendata',
  imports: [DatePipe, Navbar, RouterOutlet],
  templateUrl: './opendata.html',
  styleUrl: './opendata.css',
})
export class Opendata {

  cliente = inject(Cliente);
  data: any = signal(null);
  route = inject(ActivatedRoute);
  isLoading = signal(true);
  type = 1;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const tipo = params['tipo'];
      if (tipo) {
        this.cargarEventos(tipo);
      }
    });
  }

  private cargarEventos(tipo: number) {
    this.cliente.getEventosTipo(tipo)
      .subscribe({next: (response) => {
        this.data.set(response);
      }, error: (error) => {
        console.error('Error loading data:', error);
        this.data.set([]);
      }});
  }
}

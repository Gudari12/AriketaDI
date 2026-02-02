import { OnInit, signal } from '@angular/core';
import { Component, inject } from '@angular/core';
import { Cliente } from '../cliente';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opendata',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './opendata.html',
  styleUrl: './opendata.css',
})
export class Opendata implements OnInit{

  cliente = inject(Cliente);
  data: any = signal(null);
  route = inject(ActivatedRoute);
  isLoading = signal(true);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const tipo = +params['tipo'];
      if (tipo) {
        this.cargarEventos(tipo);
      }
    });
  }

  private cargarEventos(tipo: number) {
    this.isLoading.set(true);  // Empieza loading
    this.cliente.getEventosTipo(tipo).subscribe({
      next: (response) => {
        const items = (response as any)?.items || [];
        this.data.set(items);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading data:', error);
        this.data.set([]);
        this.isLoading.set(false);  // Termina loading incluso en error
      }
    });
  }
}

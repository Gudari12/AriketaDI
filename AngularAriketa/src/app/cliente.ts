import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cliente {
  private http = inject(HttpClient);
  private apiUrl = "https://api.euskadi.eus/culture/events/v1.0";
  data = null;
  page = 0;
  elements = 20;

  getEventos(): Observable<any[]> {
    this.page += 1;
    console.log("ASDASD")
    return this.http.get<any>(this.apiUrl+
        '/events?_elements='+this.elements+
        '&_page='+this.page);
  }

  getEvento(id: number): Observable<any[]> {
    this.page += 1;
    return this.http.get<any>(this.apiUrl+
      '/events/'+id);
  }

}

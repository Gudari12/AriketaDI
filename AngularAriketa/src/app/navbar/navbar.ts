import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Opendata } from "../opendata/opendata";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    @Input() isSidebar: boolean = false;

    menuItems = [
      { label: 'Kontzertuak', id: 1 },
      { label: 'Erakusketa', id: 3 },
      { label: 'Dantza', id: 4 }
    ];
}

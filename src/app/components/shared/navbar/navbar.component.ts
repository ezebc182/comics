import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../../interfaces/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  find(termino: string) {
    this.router.navigate(['/buscar', termino]);
  }
}

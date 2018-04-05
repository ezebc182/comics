import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe';
import { Router } from '@angular/router';
import { slugify } from '../../helpers/slugify';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[];

  constructor(private _heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  find(nombre: string) {
    this.router.navigate(['/heroe', slugify(nombre)]);
  }
}

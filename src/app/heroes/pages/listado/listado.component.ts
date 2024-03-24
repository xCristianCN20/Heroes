import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card{
      margin-top: 25px;
    }
  `]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] =[];

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe( resp => {
      this.heroes = resp;
    });
  }

}

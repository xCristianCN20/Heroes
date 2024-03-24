import { Component, OnInit, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width:100%;
      border-radius: 3px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private aRoute: ActivatedRoute, private heroesService: HeroesService, private router:Router) { }

  ngOnInit(): void {
    this.aRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroePorId(id))
      ).subscribe(resp => {
        this.heroe = resp;
      });
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}

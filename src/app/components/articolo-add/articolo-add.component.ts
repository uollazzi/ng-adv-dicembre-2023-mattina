import { Component, OnInit } from '@angular/core';
import { NuovoArticoloDto } from '../../models/articolo';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-articolo-add',
  templateUrl: './articolo-add.component.html',
  styleUrl: './articolo-add.component.css'
})
export class ArticoloAddComponent implements OnInit {
  model?: NuovoArticoloDto;
  pokemons: Pokemon[] = [];

  constructor(
    private bs: BlogService,
    private router: Router,
    private ps: PokemonsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.isUserLogged) {
      let lu = this.authService.getLoggedUser()!;

      this.model = new NuovoArticoloDto(lu.user.id);

      this.ps.search(15)
        .subscribe(pokemons => this.pokemons = pokemons.data);
    }
  }

  aggiungiArticolo() {
    this.bs.nuovoArticolo(this.model!)
      .subscribe(dati => this.router.navigate(["/", "blog"]));
  }
}

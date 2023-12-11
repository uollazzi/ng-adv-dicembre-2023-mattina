import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemons-detail',
  templateUrl: './pokemons-detail.component.html',
  styleUrl: './pokemons-detail.component.css'
})
export class PokemonsDetailComponent implements OnInit {
  pokemon?: Pokemon;

  constructor(
    private ps: PokemonsService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const codice = this.route.snapshot.paramMap.get("codice");

    if (codice) {
      this.ps.getById(codice)
        .subscribe(dati => this.pokemon = dati.data);
    }
  }


}

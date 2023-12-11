import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css'
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private ps: PokemonsService) { }

  ngOnInit(): void {
    this.ps.search()
      .subscribe(dati => this.pokemons = dati.data);
  }

}

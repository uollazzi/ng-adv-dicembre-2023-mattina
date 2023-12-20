import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemons-catturati',
  templateUrl: './pokemons-catturati.component.html',
  styleUrl: './pokemons-catturati.component.css'
})
export class PokemonsCatturatiComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private ps: PokemonsService) { }

  ngOnInit(): void {
    this.ps.getCatturati().subscribe(pokemonsCatturati => {
      this.pokemons = pokemonsCatturati.map(pc => pc.pokemon);
    });
  }

}

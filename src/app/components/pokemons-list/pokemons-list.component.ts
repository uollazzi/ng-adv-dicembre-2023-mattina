import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css'
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  loading = true;

  constructor(private ps: PokemonsService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.ps.search()
      .subscribe(dati => {
        this.pokemons = dati.data;
        this.loading = false;
      });
  }

  cattura(pokemon: Pokemon) {
    this.ps.cattura(pokemon)
      .subscribe(p => {
        this.snackBar.open(`${pokemon.name} catturato con successo.`, "OK");
      });
  }
}

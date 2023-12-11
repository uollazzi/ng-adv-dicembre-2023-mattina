import { Component, Input } from '@angular/core';
import { Attack } from '../../models/pokemon';

@Component({
  selector: 'app-pokemons-attack',
  templateUrl: './pokemons-attack.component.html',
  styleUrl: './pokemons-attack.component.css'
})
export class PokemonsAttackComponent {
  @Input("attacco")
  attack?: Attack;
}

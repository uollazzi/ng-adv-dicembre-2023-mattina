import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsAttackComponent } from './pokemons-attack.component';

describe('PokemonsAttackComponent', () => {
  let component: PokemonsAttackComponent;
  let fixture: ComponentFixture<PokemonsAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonsAttackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonsAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

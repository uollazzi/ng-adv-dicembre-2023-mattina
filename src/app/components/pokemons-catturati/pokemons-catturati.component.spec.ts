import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsCatturatiComponent } from './pokemons-catturati.component';

describe('PokemonsCatturatiComponent', () => {
  let component: PokemonsCatturatiComponent;
  let fixture: ComponentFixture<PokemonsCatturatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonsCatturatiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonsCatturatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

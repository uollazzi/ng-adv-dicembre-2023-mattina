import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsDetailComponent } from './pokemons-detail.component';

describe('PokemonsDetailComponent', () => {
  let component: PokemonsDetailComponent;
  let fixture: ComponentFixture<PokemonsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticoliListComponent } from './components/articoli-list/articoli-list.component';
import { ArticoloAddComponent } from './components/articolo-add/articolo-add.component';
import { ArticoloDetailComponent } from './components/articolo-detail/articolo-detail.component';
import { BlogComponent } from './components/blog/blog.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonsDetailComponent } from './components/pokemons-detail/pokemons-detail.component';

const routes: Routes = [
  // {
  //   path: "blog", component: ArticoliListComponent
  // },
  // {
  //   path: "blog/nuovo", component: ArticoloAddComponent
  // },
  // {
  //   path: "blog/:id", component: ArticoloDetailComponent
  // },

  {
    path: "blog", component: BlogComponent,
    children: [
      {
        path: "", component: ArticoliListComponent
      },
      {
        path: "nuovo", component: ArticoloAddComponent
      },
      {
        path: ":id", component: ArticoloDetailComponent
      },
    ]
  },
  {
    path: "pokemons", component: PokemonsComponent,
    children: [
      {
        path: "", component: PokemonsListComponent
      },
      {
        path: ":codice", component: PokemonsDetailComponent
      }
    ]
  },
  {
    path: "", redirectTo: "/blog", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

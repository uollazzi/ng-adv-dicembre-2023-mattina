import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticoliListComponent } from './components/articoli-list/articoli-list.component';
import { ArticoloAddComponent } from './components/articolo-add/articolo-add.component';

const routes: Routes = [
  {
    path: "blog", component: ArticoliListComponent
  },
  {
    path: "blog/nuovo", component: ArticoloAddComponent
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

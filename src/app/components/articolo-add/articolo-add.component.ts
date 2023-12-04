import { Component } from '@angular/core';
import { NuovoArticoloDto } from '../../models/articolo';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articolo-add',
  templateUrl: './articolo-add.component.html',
  styleUrl: './articolo-add.component.css'
})
export class ArticoloAddComponent {
  model: NuovoArticoloDto = new NuovoArticoloDto(1);

  constructor(private bs: BlogService, private router: Router) { }

  aggiungiArticolo() {
    this.bs.nuovoArticolo(this.model)
      .subscribe(dati => this.router.navigate(["/", "blog"]));
  }
}

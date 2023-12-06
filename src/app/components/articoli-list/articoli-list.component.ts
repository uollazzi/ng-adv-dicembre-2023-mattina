import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Articolo } from '../../models/articolo';

@Component({
  selector: 'app-articoli-list',
  templateUrl: './articoli-list.component.html',
  styleUrl: './articoli-list.component.css'
})
export class ArticoliListComponent implements OnInit {
  titolo = "articoli";
  oggi = 1701685389;
  articoloFinto: Articolo = { id: 1, published: true, title: "", text: "", userId: 1 };

  articoli: Articolo[] = [];

  constructor(private bs: BlogService) {

  }

  ngOnInit(): void {
    this.bs.getArticoli()
      .subscribe(dati => this.articoli = dati);
  }

  elimina(id: number) {
    this.bs.deleteArticoloById(id)
      .subscribe(dati => {

        this.bs.getArticoli()
          .subscribe(dati => this.articoli = dati);

      })
  }
}

import { Component, OnInit } from '@angular/core';
import { Articolo } from '../../models/articolo';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-articolo-detail',
  templateUrl: './articolo-detail.component.html',
  styleUrl: './articolo-detail.component.css'
})
export class ArticoloDetailComponent implements OnInit {
  articolo?: Articolo;

  constructor(private bs: BlogService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    const idNumber = Number(id);

    this.bs.getArticoloById(idNumber)
      // .pipe(
      //   delay(5000)
      // )
      .subscribe(dati => this.articolo = dati);
  }
}

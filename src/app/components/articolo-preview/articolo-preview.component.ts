import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articolo } from '../../models/articolo';

@Component({
  selector: 'app-articolo-preview',
  templateUrl: './articolo-preview.component.html',
  styleUrl: './articolo-preview.component.css'
})
export class ArticoloPreviewComponent {
  @Input()
  articolo?: Articolo;

  @Output()
  onRichiestaEliminazione = new EventEmitter<number>();

  // constructor() {
  //   this.articolo = { id: 1, published: true, title: "", text: "", userId: 1 }
  // }
  elimina() {
    this.onRichiestaEliminazione.emit(this.articolo!.id);
  }
}

// consideriamolo alla stregua di un'interface
// modificato
export type Articolo = {
  id: number;
  userId: number;
  title: string;
  published: boolean;
  text: string;
}

export class NuovoArticoloDto {
  constructor(
    public userId: number,
    public title: string = "",
    public published: boolean = false,
    public text: string = ""
  ) {

  }
}

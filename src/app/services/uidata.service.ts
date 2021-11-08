import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIDataService {

  private charactersPage = 1;

  constructor() {     
  }

  //Getter
  getCharactersPage() {
    return this.charactersPage;
  }

  //Setter
  setcharactersPage(page: number) {
    this.charactersPage = page;
  }
}

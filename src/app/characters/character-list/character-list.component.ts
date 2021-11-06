import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

   // Veikeju masyvas, kurio duomenis uzpildysime is CharacterService
  public characters: any = [];
  public charactersInfo: any = {};

  public page : number = 1;

  public searchOptions = {
    'name': '',
    'status': ''
  }

  //"Inject" character service i komponenta
  constructor(private _characterSevice: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();    
  }

  filterCharacters(name: string) {
    // alert("Character List Komponentas Suzinojo apie onForm Submit Event'a is SearchForm komponento ");
    this.searchOptions.name = name;
    this.getCharacters();
  }

  getCharacters() {
    // Characters kintamajam priskiriame duomenis is 
    //characterService getCharaters funkcijos
    this.characters = this._characterSevice.getCharacters(this.page)
        //Subsceibe naudojama su Obsevable tipo obj.
        //Angular visada grazina Obsevable
        //data - kint. su grazintais duomenimis
      .subscribe((data: any) => {

        this.characters = data.results;
        this.charactersInfo = data.info;
                  
      });

    console.log(this.characters);


  }

  nextPage() {

    if(this.page < this.charactersInfo.pages) {
      this.page  ++ ;
    } else {
      alert("This is a last page");
    }
    
    console.log("Next page:");
    console.log(this.page);

    this.getCharacters();
  }

  previousPage() {

    // Patikriname ar page reiksme nera neigiama, -1 puslapio nera
    if(this.page > 1) {
      this.page--;
    }

    // Iskvieciame characters service atnaujinti duomenis
    this.getCharacters();
  }
  
}
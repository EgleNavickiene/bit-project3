import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})

export class CharacterDetailsComponent implements OnInit {

  // Character Informacijos objektas
  public character: any;

  // Reiksme gali buti string arba null, pagal grazinama is funkcijos this.route.snapshot.paramMap.get("id");
  private id : string | null;

  // "Injectiname" character service i komponenta
  constructor(private route: ActivatedRoute, private _characterService: CharacterService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {

    // Gauname route parametra /products/:id
    // Pasiskaitymui apie skirtingus budus gauti parametrus:
    // https://medium.com/@tiboprea/accessing-url-parameters-in-angular-snapshot-vs-subscription-efc4e70f9053

    /* TODO: 2 (skaicius) turetu buti gaunamas dinamiskai pagal route'o parametra */
    this._characterService.getCharacter(this.id).subscribe(data => {
      // Kokius duomenis gaunu?
      console.log("Veikejo duomenys is API:")
      console.log(data);

      // Priskiriame duomenis is API
      // Komponento kintamajam character
      this.character = data;
    });
  }

}
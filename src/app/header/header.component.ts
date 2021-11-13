
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public title: string;

  // Tipas string masyvas []
  private buttons : string[];

  constructor() {
    this.title = "Rick And Morty API - Angular"

    this.buttons = [
      'Button 1',
      'Button 2'
    ];
   }

   //Enkapsuliacija:
   //getter funkcija
   getTitle() {
     return this.title;
   }

   //setter funkcija
   setTitile(title : string) {
     this.title = title;
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  //kintamasis input ivestiems duomenims
  public searcString: string =  '';

  // @Output() onFormSubmit : EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
    
  }

  searchFormSubmit(){
   // this.onFormSubmit.emit(searcString);
  }

}

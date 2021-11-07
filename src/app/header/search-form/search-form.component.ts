import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  //kintamasis input ivestiems duomenims
  public searchString: string =  '';
  public status : string = '';

  /* Norint padaryti filtravima pagal kelis parametrus, turbut geriausia butu naudoti objekta, perduoti duomenims */
  public searchOptions = {
    name: '',
    status: '',
    gender: ''
  }

  @Output() onFormSubmit : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    
  }

  searchFormSubmit(){
   this.onFormSubmit.emit(this.searchString);
  }

  statusChange(value : any) {
    alert("Status has changed");
  }

}

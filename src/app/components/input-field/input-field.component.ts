import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { SaveToLSService } from '../../services/save-to-ls.service';
import { ApiRepos } from '../../interfaces/api-repos';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  repos:ApiRepos[];

  constructor(private apiRequestService: ApiRequestService,
    private saveToLSService:SaveToLSService) { }

  ngOnInit(): void {
    this.apiRequestService.getRepositories().subscribe(data => {
      // console.log(data)
      this.repos=data.items
    });
  }
  addToLocalStorage(repo){
    this.saveToLSService.addToLocalStorage(repo)    
  }

}

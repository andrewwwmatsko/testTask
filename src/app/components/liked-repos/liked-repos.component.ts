import { Component, OnInit } from '@angular/core';
import { SaveToLSService } from '../../services/save-to-ls.service'

@Component({
  selector: 'app-liked-repos',
  templateUrl: './liked-repos.component.html',
  styleUrls: ['./liked-repos.component.css']
})
export class LikedReposComponent implements OnInit {

  likedRepos:[];

  constructor(private localStorageService:SaveToLSService,) { }

  ngOnInit(): void {
    this.likedRepos=JSON.parse(localStorage.getItem('likedRepos'))
    console.log(this.likedRepos);
  }
  delete(repo){
    this.localStorageService.deleteFromLS(repo)
    this.likedRepos=JSON.parse(localStorage.getItem('likedRepos'))
  }

}

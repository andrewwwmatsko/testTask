import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SaveToLSService {

  constructor() { }
  
  addToLocalStorage(repo){
    let likedRepos=[];
    let likedRepoObj={};

    if(localStorage.getItem('likedRepos')) {
      likedRepos=JSON.parse(localStorage.getItem('likedRepos'))
      likedRepoObj={'name':repo.name, 'html_url': repo.html_url, 'desc': repo.description, 'id':repo.id}
      likedRepos=[...likedRepos, likedRepoObj]
    } else {
      likedRepoObj={'name':repo.name, 'html_url': repo.html_url, 'desc': repo.description, 'id':repo.id}
      likedRepos=[likedRepoObj]
    }
    localStorage.setItem('likedRepos',JSON.stringify(likedRepos))
    Swal.fire({
        title: "Success!",
        text: "You saved th repo!",
        icon: "success",
    })
  }

  deleteFromLS(repo){
    // need to change logic...
    let repoId=repo.id;
    let likedRepos=[];

    if(localStorage.getItem('likedRepos')) {
      likedRepos=JSON.parse(localStorage.getItem('likedRepos'))
    } else {
      likedRepos=[]
    }
    likedRepos.splice(likedRepos.indexOf(repoId),1)
    localStorage.setItem('likedRepos',JSON.stringify(likedRepos))
    console.log(repoId);
    
  }

}

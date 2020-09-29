import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiRepos } from '../interfaces/api-repos'


@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient,) { }

  getRepositories() {
    return this.http.get<ApiRepos[]>('https://api.github.com/search/repositories?q=KEYWORD');
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class SearchService {
  private apikey: string;

  constructor(private _http: Http) { 
    this.apikey = '690655f93fe9141f3e578b2796ab63b3';
    console.log('SearchService Initialized..');
  }

  search(searchStr:string){
    return this._http.get('https://api.themoviedb.org/3/search/multi?query=' + searchStr + '&api_key=' + this.apikey + '&include_adult=false')
            .map(res => res.json());
    }

}

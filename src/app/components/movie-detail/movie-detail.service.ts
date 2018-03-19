import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


export interface MovieInterface {
  title: String;
  number_of_seasons: Number;
  overview: String;
  original_language: String;
  poster_path: any;
  backdrop_path: any;
  release_date: any
  vote_average: any;
  runtime: number;
}

@Injectable()
export class MovieDetailService {

  private apikey: string;

  constructor(private _http: Http) {
    this.apikey = '690655f93fe9141f3e578b2796ab63b3';
    console.log('MoviesService Initialized..');
  }

  getMovie(id: number) {
    return this._http.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=' + this.apikey +'&language=en-US')
      .map(res => res.json());
  }

}
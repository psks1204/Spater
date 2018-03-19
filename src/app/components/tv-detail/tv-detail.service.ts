import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

export interface ShowInterface {
  name: String;
	number_of_seasons: Number;
	overview: String;
	original_language: String;
	poster_path: any;
	backdrop_path: any;
	last_air_date: any
}



@Injectable()
export class TvDetailService {

  private apikey: string;
  //private data: any[];

  constructor(private _http: Http) {
    this.apikey = '690655f93fe9141f3e578b2796ab63b3';
    console.log('MoviesService Initialized..');
  }
  
  //setData(data: any[]) {
  //  this.data = data;
  //}

  //getData() {
  //  return this.data || [];
  ///}

  //hasData() {
  //  return this.data && this.data.length;
  //}  

  getShow(id: number) {
    return this._http.get('https://api.themoviedb.org/3/tv/'+ id +'?api_key=' + this.apikey +'&language=en-US')
      .map(res => res.json());
  }

  getSeason(id: number, sid: number) {
    return this._http.get('https://api.themoviedb.org/3/tv/' + id +'/season/' + sid + '?api_key=' + this.apikey +'&language=en-US')
     .map(res => res.json());
  }

}

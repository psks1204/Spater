import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import {MediaChange, ObservableMedia} from "@angular/flex-layout";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchRes:Array<Object>;
  public searchStr: string = '';
  public colnum: number;
  public totalResult: number;
  public noResult: boolean = false;
  public currentType: string;
  public currentId: string;
  public error: string;
  public detailElement: any;

  constructor(private _searchService: SearchService, private media: ObservableMedia) { 
    media.asObservable()
      .subscribe((change: MediaChange) => {
        console.log(change.mqAlias);
        if (change.mqAlias == 'sm' ) {
          this.colnum = 4;
        }
        else if (change.mqAlias == 'xs'){
          this.colnum = 2;
        }
        else {
          this.colnum = 6;
        }
      });
  }

  appSetup(v: string) {
    this.detailElement = <HTMLImageElement>document.getElementById(v);
  }

  search() {
    if(this.searchStr !== '') {
      this._searchService.search(this.searchStr)
        .subscribe(res => {
          this.searchRes = res.results;
          this.totalResult = res.total_results;
          if(this.totalResult == 0){
            this.noResult = true;
        }
      })
    }
  }

  selectedVideo = (i: number) => {
    this.currentType = this.searchRes[i]['media_type'];
    this.currentId = this.searchRes[i]['id'];
    if (this.currentType == "movie"){
      this.detailElement = "/movie\/" + this.currentId;
      console.log(this.detailElement);
    } else{
      this.detailElement = "/show\/" + this.currentId;
      console.log(this.detailElement);
    }
    
}

  ngOnInit() {

  }
}

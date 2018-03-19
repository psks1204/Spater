import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowInterface, TvDetailService } from './tv-detail.service';
import { getHtmlTagDefinition } from '@angular/compiler';

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.css']
})
export class TvDetailComponent implements OnInit {

  public show: ShowInterface;
  public season: ShowInterface;
  public seasons: Array<Object>;
  public episodes: Array<Object>;
  public genres: Array<Object>;
  public currentSeasonId: number;
  public currentShowId: number;
  public currentSeasonPoster: any;
  public currentSeason: number;
  public seasonOverview: string;
  public showOverview: string;
  
  constructor(
    private router: ActivatedRoute,
    private _showService: TvDetailService
  ) { }


  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this._showService.getShow(id).subscribe(show => {
        this.show = show;
        this.seasons = show.seasons;
        this.showOverview = show.overview;
        this.genres = show.genres;
        this.currentSeason = 1;
        this.currentShowId = show.id;
        console.log(this.show);
      });

      let sid = 1;
      this._showService.getSeason(id, sid).subscribe(season => {
        this.season = season;
        let overview = season.overview;
        if (overview === '') {
          this.seasonOverview = this.showOverview;
        } else {
          this.seasonOverview = season.overview;
        }
        this.episodes = season.episodes;
        console.log(this.season);
      }, error => {
        // handle errors
      });
    });
  }

  selectedSeason = (i: number) => {
    this.currentSeason = this.seasons[i]['season_number'];
    this.currentSeasonId = this.seasons[i]['id'];
    this.currentSeasonPoster = this.seasons[i]['poster_path'];
    let id = this.currentShowId;
    let sid = this.currentSeason;
    this._showService.getSeason(id, sid).subscribe(season => {
      this.season = season;
      let overview = season.overview;
      if (overview === '') {
        this.seasonOverview = this.showOverview;
      } else {
        this.seasonOverview = season.overview;
      }
      this.episodes = season.episodes;
      console.log(this.season);
    }, error => {
      // handle errors
    });
  }

  

  /*getSeason(){
    if (this._showService.hasData()) {
      // this will get the data which was previously stored in the memory
      // and there will be no HTTP request
      let data = this._showService.getData();
         // do something with data now ...
         this.episodes = data;
    
    } else {
      // old code 
      let id = this.currentShowId;
      let sid = this.currentSeason;
      this._showService.getSeason(id, sid).subscribe(season => {
        this._showService.setData(season.episdoes);
      }, error => {
        // handle errors
      });
    }
  }
*/

  getSeason(){
      // old code 
      
    }

  
}

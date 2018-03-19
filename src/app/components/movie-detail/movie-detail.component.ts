import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieInterface, MovieDetailService } from './movie-detail.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  public movie: MovieInterface;
  public genres: Array<Object>;
  constructor(
    private router: ActivatedRoute,
    private _movieService: MovieDetailService
  ) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this._movieService.getMovie(id).subscribe(movie => {
        this.movie = movie;
        this.genres = movie.genres;
        console.log(this.movie);
      });
    });
  }

}

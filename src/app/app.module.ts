import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressBarModule, MatExpansionModule, MatGridListModule, MatMenuModule, MatListModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatInputModule } from '@angular/material';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { LogUpdateService } from './services/log-update.service';
import { CheckForUpdateService } from './services/check-for-update.service';
import { PromptUpdateService } from './services/prompt-update.service';

import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './components/search/search.service';
import { TvDetailComponent } from './components/tv-detail/tv-detail.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieDetailService } from './components/movie-detail/movie-detail.service';
import { TvDetailService } from './components/tv-detail/tv-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    TvDetailComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule
  ],
  providers: [
    CheckForUpdateService,
    LogUpdateService,
    PromptUpdateService,
    SearchService,
    MovieDetailService,
    TvDetailService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

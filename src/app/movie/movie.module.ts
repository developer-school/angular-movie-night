import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieComponent,
    AddMovieComponent,
  ],
  imports: [CommonModule, MovieRoutingModule, ReactiveFormsModule],
})
export class MovieModule {}

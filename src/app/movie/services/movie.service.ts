import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Movie, movies } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private ROOT_URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getMovies() {
    return of(movies);
  }

  getMoviesFromHttp() {
    return this.http.get<Movie[]>(this.ROOT_URL).pipe(this.addDelay);
  }

  movie(id: number) {
    console.log(id);
    return of(movies.find(movie => +movie.id === +id));
  }

  movieFromHttp(id: number) {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }

  addMovie(movie: Movie) {
    return this.http.post(this.ROOT_URL, movie);
  }

  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000));
  }
}

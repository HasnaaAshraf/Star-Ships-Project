import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  private apiurl = 'https://swapi.dev/api/starships'; 

  constructor(private http:HttpClient) { }

  getStarships(url?: string): Observable<any> {
   const requestUrl = url ? url : this.apiurl;
    return this.http.get<any>(requestUrl).pipe(
      catchError(error => {
        console.error('Error fetching starships:', error);
        return throwError(() => new Error('Failed to fetch starships'));
      })
    );
  }

  getStarshipById(id: number|string): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/${id}/`).pipe(
      catchError(error => {
        console.error('Error fetching starship details:', error);
        return throwError(() => new Error('Failed to fetch starship details'));
      })
    );
  }

}

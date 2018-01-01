import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

const API_ENDPOINT = 'http://localhost:3000/talks';

@Injectable()
export class TalkService {
    handleError;
    constructor(private http: HttpClient) {}

    getTalks() {
    //    return this.http.get(API_ENDPOINT).pipe(data => console.log('>',data) );
        return this.http.get(API_ENDPOINT);
    }

    getTalk(id) {
        return this.http.get(`${API_ENDPOINT}/${id}`)
        .pipe(
            map(res => res),
            catchError(this.handleError));
    }
}
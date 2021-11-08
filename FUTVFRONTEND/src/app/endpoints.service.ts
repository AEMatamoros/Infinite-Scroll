import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http:HttpClient) { }

  getEndPoint(){
    return `http://localhost:3000/`;
  }

  getPublications(offset):Observable<any>{
    return this.http.get<any>(this.getEndPoint() + `publication/` + offset,{ responseType: 'json'})
  }
}

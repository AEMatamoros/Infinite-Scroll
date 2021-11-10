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

  postPublication(publication,files):Observable<any>{
    let tags = []
    tags = publication.tags.split(' ');

    var formData: any = new FormData();
    
    formData.append("title", publication.title);
    formData.append("description", publication.description);

    for(let i =0; i < files.length; i++){
      formData.append("files", files[i], files[i]['name']);
    }

    for(let i =0; i < tags.length; i++){
      formData.append("tags[]", tags[i]);
    }
   
    return this.http.post<any>(this.getEndPoint() + `publication/`, formData ,{responseType: 'json' })
  }

}

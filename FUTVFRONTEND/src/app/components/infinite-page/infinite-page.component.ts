import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../../endpoints.service';
@Component({
  selector: 'app-infinite-page',
  templateUrl: './infinite-page.component.html',
  styleUrls: ['./infinite-page.component.scss']
})
export class InfinitePageComponent implements OnInit {

  public offset: number = 0;
  public page: number = 1;
  public publications = [];
  public loadingPublications = true;

  constructor( private endpoint: EndpointsService ) { 
      this.getPublications(0);
  }

  ngOnInit(): void {}

  onScroll(){
    this.page += 1;
    this.offset = (3*this.page)-3;
    this.loadMorePublications(this.offset);
    console.log('scroll')
  }

  getPublications(offset):void{
    this.endpoint.getPublications(offset).subscribe(res=>{
      this.publications = res.publications;
      this.publications.forEach(pub => {
        pub.img = this.endpoint.getEndPoint() + `images/` + pub.img;
      });
      this.loadingPublications = false;
  })
  }

  loadMorePublications(offset):void {
    this.endpoint.getPublications(offset).subscribe(res=>{
      let newPublications  = res.publications;
      newPublications.forEach(pub => {
        pub.img = this.endpoint.getEndPoint() + `images/` + pub.img;
        this.publications.push(pub);
      });
      this.loadingPublications = false;
  })
  }
}

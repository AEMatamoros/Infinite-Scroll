import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../../endpoints.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-infinite-page',
  templateUrl: './infinite-page.component.html',
  styleUrls: ['./infinite-page.component.scss']
})
export class InfinitePageComponent implements OnInit {

  public offset: number = 0;
  public page: number = 1;
  public publications = [];
  public newPublications = [];
  public loadingPublications = true;
  public numberOfPublications:number;

  //Crear Publicacion
  public publication = {
    title: "",
    description: "",
    tags: "",
    img: null
  };
  public imgFile;
  public fotoSelected;
  public files = [] ;

  constructor(private endpoint: EndpointsService) {
    this.getPublications(0);
  }

  ngOnInit(): void { }

  onScroll() {

    this.page += 1;
    this.offset = (3 * this.page) - 3;
    this.loadMorePublications(this.offset);
    
  }

  getPublications(offset): void {
    this.endpoint.getPublications(offset).subscribe(res => {
      console.log(res)
      this.publications = res.registros;
      this.numberOfPublications = res.numeroDeRegistros
      this.publications.forEach(pub => {
        pub.files.forEach(file => {
          file.file_name = this.endpoint.getEndPoint() + `files/` + file.file_name;
        });
         
      });
      this.loadingPublications = false;
    })
  }

  loadMorePublications(offset): void {

    this.newPublications = [];

    this.endpoint.getPublications(offset).subscribe(res => {

      this.newPublications = res.registros;
      this.newPublications.forEach(pub => {
        pub.files.forEach(file => {
          file.file_name = this.endpoint.getEndPoint() + `files/` + file.file_name
        });
        this.publications.push(pub);
      });

      this.loadingPublications = false;

    })
    
  }

  //Crear publicaciones
  
  fotoSeleccionada(event: HtmlInputEvent) {

    let fileList: FileList = event.target.files;
      if(fileList.length > 0) {
          let file: File = fileList[0];
          var input = event.target;

          var reader = new FileReader();
          reader.readAsDataURL(input.files[0]);
          reader.onload = (data) => {
          this.imgFile = input.files[0];
          }
      }

  }

  
  selectFiles(event:any) {
   
    this.files = event.target.files;
}

  createPublication(): void {
    
    this.endpoint.postPublication(this.publication,this.files).subscribe(res=>{
      console.log(res)
    })

  }


}



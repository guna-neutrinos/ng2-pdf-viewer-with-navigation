import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pdfSrc = '';
  pageVariable = 1;
  zoom= 1;
totalPages: any;
  nextPage() {
    this.pageVariable++;
  }
  previous() {
    this.pageVariable--;
  }
  zoomin() {
    this.zoom =this.zoom+0.1;
  }
  zoomout() {
    if (this.zoom >0.1) 
      this.zoom =this.zoom-0.1;
  }

  afterLoadComplete(pdf: any) {
    console.log('after-load-complete');
    this.totalPages = pdf.numPages;
  }

  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
  }

  textLayerRendered(e: CustomEvent) {
    console.log('(text-layer-rendered)', e);
  }

  onFileSelected() {
    let $img: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      let reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($img.files[0]);
    }
  }
}

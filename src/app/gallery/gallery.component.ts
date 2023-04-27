import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  search = false;
  searchTerm: string ;
  images: any[];
  filteredImgs: any[] = [];
  slideIndex = 0;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.search = true;

    this.http.get<any[]>('/assets/images.json')
    .subscribe(
      data => {
        this.images = data;
        this.filteredImgs = data;
      }
    );
  }

  openModal() {
    document.getElementById('imgModal').style.display = "block";
  }

  closeModal() {
    document.getElementById('imgModal').style.display = "none";
  }

   plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

   currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(slideIndex);
     showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf<HTMLElement>;
      const dots = document.getElementsByClassName("images")as HTMLCollectionOf<HTMLElement>;

      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      
      slides[this.slideIndex-1].style.display = "block";
      if (dots && dots.length > 0) {
        dots[this.slideIndex-1].className += " active";
      }
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  windowWidth: number = window.innerWidth;
  windowWidth786: boolean = false;

  ngOnInit(): void {
    this.windowWidth786 = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      this.windowWidth786 = window.innerWidth <= 768;
      console.log(this.windowWidth786);
    });
  }

}

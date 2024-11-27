import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  windowWidth: number = window.innerWidth;
  windowWidth786: boolean = false;

  constructor(private metaService: Meta, private titleService: Title) {
    this.setMeta();
  }

  setMeta() {
    // Set the meta title
    this.titleService.setTitle('Best Online & Offline UI UX Design Institute inHyderabad | Our Service ');

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content: "Are you looking for best UI/UX design Institute with placement? You have come to the right place! Star Design Institute is the Best Institute  for UI/UX Design , AR-VR/UX, UX/VI , Graphic Design in Hyderabad | Ammerpet "
    });
  }

  ngOnInit(): void {
    this.windowWidth786 = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      this.windowWidth786 = window.innerWidth <= 768;
      console.log(this.windowWidth786);
    });
  }

}

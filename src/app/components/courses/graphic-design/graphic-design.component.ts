import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent {
  constructor(private metaService: Meta, private titleService: Title) {
    this.setMeta();
  }

  setMeta() {
    // Set the meta title with keywords
    this.titleService.setTitle('Graphic Design Institute in Hyderabad - Fees & Placement');

    // Set the meta description with keywords
    this.metaService.updateTag({
      name: 'description',
      content: 'Join the best graphic design coaching center in Hyderabad! Enroll at Star Design Institute today and receive 100% job assistance to secure a position in top MNCs.'
    });

    // Optional: Add meta keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Best graphic design institute in Hyderabad, Graphic design courses in Hyderabad Ameerpet, Graphic design course with placement in Hyderabad, Best graphic design courses in Hyderabad fees structure'
    });
  }

}

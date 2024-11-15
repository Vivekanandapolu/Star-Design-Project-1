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
    this.titleService.setTitle('Best Graphic Design Coaching Center in Hyderabad | Courses with Placement');

    // Set the meta description with keywords
    this.metaService.updateTag({
      name: 'description',
      content: 'Explore the best graphic design courses in Hyderabad, including Ameerpet. Join the top coaching center with affordable fees and placement opportunities. Enroll today and kickstart your creative career.'
    });

    // Optional: Add meta keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Best graphic design coaching center in Hyderabad, Graphic design courses in Hyderabad Ameerpet, Graphic design course with placement in Hyderabad, Best graphic design courses in Hyderabad fees structure'
    });
  }

}

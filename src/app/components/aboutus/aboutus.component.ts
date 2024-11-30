import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
  constructor(private metaService: Meta, private titleService: Title) {
    this.setMeta();
  }

  setMeta() {
    // Set the meta title
    this.titleService.setTitle('Top UI UX Design Institute in Hyderabad | Ameerpet | Placement 2025');

    // Set the meta description with updated content
    this.metaService.updateTag({
      name: 'description',
      content: "We are the best UI/UX design institute in Ameerpet, Hyderabad, with 12+ Years of Excellence with qualified training experts offering live interactive classes. Get in touch for information on UI/UX Design, AR/VR UX, and Graphic Design course fees, batch timings, and placement assistance."
    });

    // Optional: Add meta keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Top UI/UX design coaching institute in Hyderabad, Best UI/UX design courses in Ameerpet, Graphic design course fees, AR/VR UX training, UI/UX design courses with placement'
    });
  }
}

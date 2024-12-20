import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-vi-design',
  templateUrl: './ui-vi-design.component.html',
  styleUrls: ['./ui-vi-design.component.scss']
})
export class UiViDesignComponent {
  constructor(private metaService: Meta, private titleService: Title) {
    this.setMeta();
  }

  setMeta() {
    // Set the meta title with keywords
    this.titleService.setTitle('Best UX/VI Design Course and Training Institute in Hyderabad | Fees & Details');

    // Set the meta description with keywords
    this.metaService.updateTag({
      name: 'description',
      content: 'Explore the best UX/VI design course in Hyderabad with affordable fees. Join the top UX/VI design training institute and advance your career with expert guidance and hands-on training.'
    });

    // Optional: Add meta keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'UX/VI design course fees in Hyderabad, Best UX/VI design training institute in Hyderabad fees, UX/VI design course Hyderabad, Best UX/VI design course in Hyderabad'
    });
  }

}

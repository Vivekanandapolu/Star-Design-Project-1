import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent {
  constructor(private metaService: Meta, private titleService: Title) {
    this.setMeta();
  }

  setMeta() {
    // Set the meta title
    this.titleService.setTitle('Master Product Management - Become a Full-Stack Product Manager');

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content: "Learn product management and become a full-stack product manager. Master product strategy, development, and market analysis to drive product success. Enroll now to advance your career as a product manager."
    });
  }
}

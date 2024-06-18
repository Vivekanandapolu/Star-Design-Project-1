import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent {
  constructor(private metaService: Meta) {
    this.setMeta()
  }
  setMeta() {
    this.metaService.updateTag({
      name: 'description',
      content: "Learn product management and become a full-stack product manager. Master product strategy, development, and market analysis to drive product success. Enroll now to advance your career as a product manager."
    });
  }
}

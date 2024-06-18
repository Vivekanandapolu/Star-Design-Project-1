import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-graphic-design',
  templateUrl: './graphic-design.component.html',
  styleUrls: ['./graphic-design.component.scss']
})
export class GraphicDesignComponent {
  constructor(private metaService: Meta) {
    this.setMeta()
  }
  setMeta() {
    this.metaService.updateTag({
      name: 'description',
      content: "Graphic Designing - design your future. Discover the essential skills and techniques of graphic design. Learn about typography, color theory, layout design, and more. Start your journey to become a professional graphic designer."
    });
  }
}

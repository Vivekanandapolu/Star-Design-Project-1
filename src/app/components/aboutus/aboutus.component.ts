import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
  constructor(private metaService: Meta) {
    this.setMeta()
  }
  setMeta() {
    this.metaService.updateTag({
      name: 'description',
      content: "Design, Research, Deep Dive – 12+ Years of Excellence. We are dedicated to delivering exceptional design and research services, specializing in deep dives to uncover insights and drive innovation."
    });
  }
}

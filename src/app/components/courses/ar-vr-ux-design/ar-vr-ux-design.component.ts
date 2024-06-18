import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ar-vr-ux-design',
  templateUrl: './ar-vr-ux-design.component.html',
  styleUrls: ['./ar-vr-ux-design.component.scss']
})
export class ArVrUxDesignComponent {
  constructor(private metaService: Meta) {
    this.setMeta()
  }
  setMeta() {
    this.metaService.updateTag({
      name: 'description',
      content: 'Explore AR/VR design and bring the future to life. Learn essential techniques in augmented and virtual reality to create immersive experiences.'
    });
  }
}

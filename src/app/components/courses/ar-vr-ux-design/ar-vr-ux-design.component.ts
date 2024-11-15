import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ar-vr-ux-design',
  templateUrl: './ar-vr-ux-design.component.html',
  styleUrls: ['./ar-vr-ux-design.component.scss']
})
export class ArVrUxDesignComponent {
  constructor(private metaService: Meta, private titleService: Title) {
    this.setMeta();
  }

  setMeta() {
    // Set the meta title with keywords
    this.titleService.setTitle('Best AR/VR Courses and Coaching Centres in Hyderabad | Top AR/VR Training Institute');

    // Set the meta description with keywords
    this.metaService.updateTag({
      name: 'description',
      content: 'Join the best AR/VR coaching institute in Hyderabad. Explore top AR/VR courses to master augmented and virtual reality. Enroll in leading AR/VR coaching centers for immersive learning experiences.'
    });

    // Optional: Add meta keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'AR/VR courses in Hyderabad, AR/VR coaching centres in Hyderabad, Top AR/VR coaching centres in Hyderabad, Best AR/VR coaching institute in Hyderabad'
    });
  }

}

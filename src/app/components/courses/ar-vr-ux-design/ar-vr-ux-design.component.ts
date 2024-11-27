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
    this.titleService.setTitle('Best AR/VR Courses in Hyderabad | Top Training Institutes');

    // Set the meta description with keywords
    this.metaService.updateTag({
      name: 'description',
      content: "Enroll in Hyderabad's best AR/VR courses. Join top institutes and coaching centers for practical, career-ready virtual & augmented reality training."
    });

    // Optional: Add meta keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'AR/VR courses in Hyderabad, AR/VR coaching centres in Hyderabad, Top AR/VR coaching centres in Hyderabad, Best AR/VR coaching institute in Hyderabad'
    });
  }

}

import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-vi-design',
  templateUrl: './ui-vi-design.component.html',
  styleUrls: ['./ui-vi-design.component.scss']
})
export class UiViDesignComponent {
  constructor(private metaService: Meta) {
    this.setMeta()
  }
  setMeta() {
    this.metaService.updateTag({
      name: 'description',
      content: "Learn Voice User Interface (VUI) design to bring the future to life. Master the skills to create intuitive voice-driven experiences that engage users. Enroll now and advance your career in UI/VI design."
    });
  }
}

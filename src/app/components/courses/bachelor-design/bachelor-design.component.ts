import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bachelor-design',
  templateUrl: './bachelor-design.component.html',
  styleUrls: ['./bachelor-design.component.scss']
})
export class BachelorDesignComponent implements OnInit {
  windowWidth: boolean = false;
  constructor(private metaService: Meta) {

  }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth <= 1024;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth <= 1024;
    });
    this.setMeta()
  }

  setMeta() {
    this.metaService.updateTag({
      name: 'description',
      content: "Discover the Bachelor of Design (B.Des) in UX and Digital Product Design. Learn user experience (UX) principles, digital product design, and user-centered design methodologies. Develop the skills to create innovative digital products that meet user needs and expectations. Start your journey towards a career in UX and digital product design today."
    });
  }
}

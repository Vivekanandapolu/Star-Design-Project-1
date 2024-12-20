import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bachelor-design',
  templateUrl: './bachelor-design.component.html',
  styleUrls: ['./bachelor-design.component.scss']
})
export class BachelorDesignComponent implements OnInit {
  windowWidth: boolean = false;
  constructor(private metaService: Meta, private titleService: Title) {
    this.setMeta();
  }

  setMeta() {
    // Set the meta title
    this.titleService.setTitle('Bachelor of Design (B.Des) in UX and Digital Product Design');

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content: "Discover the Bachelor of Design (B.Des) in UX and Digital Product Design. Learn user experience (UX) principles, digital product design, and user-centered design methodologies. Develop the skills to create innovative digital products that meet user needs and expectations. Start your journey towards a career in UX and digital product design today."
    });
  }

  ngOnInit(): void {
    this.windowWidth = window.innerWidth <= 1024;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth <= 1024;
    });
  }

}

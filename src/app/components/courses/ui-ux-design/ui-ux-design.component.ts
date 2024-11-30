import { Component, ElementRef, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-ux-design',
  templateUrl: './ui-ux-design.component.html',
  styleUrls: ['./ui-ux-design.component.scss']
})
export class UIUXDesignComponent {
  @ViewChild('cards') cardsContainers: ElementRef | undefined;
  constructor(private metaService: Meta, private titleService: Title) {
    this.setMeta();
  }

  setMeta() {
    // Set the meta title with keywords
    this.titleService.setTitle('Top UI UX Design Institute in Hyderabad Awaits You');

    // Set the meta description with keywords
    this.metaService.updateTag({
      name: 'description',
      content: "Looking for unique UI/UX design training? Explore premier institutes in Hyderabad that offer tailored courses to elevate your career!"
    });

    // Set additional meta keywords for SEO (optional)
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Best UI/UX design training institute in Hyderabad, UI/UX design course in Ameerpet, UI/UX design course with placement in Hyderabad, Offline UI/UX design course in Hyderabad, Top UI/UX design centers in Hyderabad, UI/UX institute near me, Best UI/UX institute near me'
    });
  }


  slide(direction: string) {
    if (this.cardsContainers)
      if (direction === 'left') {
        this.cardsContainers.nativeElement.scrollLeft -= 350;
      }
      else if (direction === 'right') {
        this.cardsContainers.nativeElement.scrollLeft += 350;
      }
  }
}

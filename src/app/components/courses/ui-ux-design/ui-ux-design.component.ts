import { Component, ElementRef, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ui-ux-design',
  templateUrl: './ui-ux-design.component.html',
  styleUrls: ['./ui-ux-design.component.scss']
})
export class UIUXDesignComponent {
  @ViewChild('cards') cardsContainers: ElementRef | undefined;
  constructor(private metaService: Meta) {

    this.setMeta()
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
  setMeta() {
    this.metaService.updateTag({
      name: 'description',
      content: "Learn UX/UI Design and gain real experience. Master the essential skills and techniques of user interface and user experience design to create intuitive and engaging digital products. Enroll now to advance your career in UI/UX."
    });
  }
}

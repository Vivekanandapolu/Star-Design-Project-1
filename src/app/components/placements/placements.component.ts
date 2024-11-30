import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss']
})
export class PlacementsComponent implements OnInit {
  windowWidth: boolean = false;
  isLeftScrollable: boolean = false;
  isRightScrollable: boolean = true;
  @ViewChild('cards') cardsContainers: ElementRef | undefined;
  ngOnInit(): void {
    this.windowWidth = window.innerWidth <= 1024;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth <= 1024;
    });
  }
  constructor(private metaService: Meta, private titleService: Title) {
    this.setMeta();
  }

  setMeta() {
    // Set the meta title
    this.titleService.setTitle('UI UX Course with placement guarantee | Best Design Institute in Hyderabad ');

    // Set the meta description
    this.metaService.updateTag({
      name: 'description',
      content: "Get 100% JOB Oriented UI /UX Design Course in Hyderabad with .The best Graphic design institute in Hyderabad with Tools,Interview Skills ,100% Placements , Live Project & Practical classes "
    });
  }



  slide(direction: string) {
    if (this.cardsContainers) {
      const cards = this.cardsContainers.nativeElement;
      const scrollStep = 345; // Adjust as needed

      if (direction === 'left') {
        const newScrollLeft = cards.scrollLeft - scrollStep;
        cards.scrollLeft = Math.max(newScrollLeft, 0); // Ensure scrollLeft doesn't go below 0
      } else if (direction === 'right') {
        const newScrollLeft = cards.scrollLeft + scrollStep;
        cards.scrollLeft = Math.min(newScrollLeft, cards.scrollWidth - cards.clientWidth); // Ensure scrollLeft doesn't exceed scrollWidth
      }
      this.updateScrollState();
    }
  }

  updateScrollState() {
    if (this.cardsContainers) {
      const cards = this.cardsContainers.nativeElement;
      // Check if scroll is at the leftmost position
      this.isLeftScrollable = cards.scrollLeft > 0;

      // Check if scroll is at the rightmost position
      this.isRightScrollable = cards.scrollLeft < (cards.scrollWidth - cards.offsetWidth);
    }
  }
}

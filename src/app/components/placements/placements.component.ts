import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

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


  slide(direction: string) {
    if (this.cardsContainers) {
      const cards = this.cardsContainers.nativeElement;
      const scrollStep = 1140; // Adjust as needed

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

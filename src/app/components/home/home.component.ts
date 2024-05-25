import { Component, ViewChild, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('dropAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('1000ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  windowWidth: number = window.innerWidth;
  isLeftScrollable: boolean = false;
  isRightScrollable: boolean = false;
  @ViewChild('cards') cardsContainers: ElementRef | undefined;
  scrollIntervalId: any;
  scrollDirection: string = 'right';
  windowWidth786: boolean = false;

  ngOnInit(): void {
    this.updateScrollState();
    this.startAutoScroll();
    this.windowWidth786 = window.innerWidth <= 786;
    window.addEventListener('resize', () => {
      this.windowWidth786 = window.innerWidth <= 786;
      this.updateScrollState();
    });
  }

  ngOnDestroy(): void {
    this.clearAutoScroll();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.updateScrollState();
  }

  slide(direction: string) {
    if (this.cardsContainers) {
      const cards = this.cardsContainers.nativeElement;
      const scrollStep = this.calculateScrollStep(); // Calculate scroll step dynamically

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

      if (!this.isRightScrollable) {
        this.scrollDirection = 'left';
      } else if (!this.isLeftScrollable) {
        this.scrollDirection = 'right';
      }
    }
  }

  startAutoScroll() {
    this.clearAutoScroll(); // Clear any existing intervals
    this.scrollIntervalId = setInterval(() => {
      this.slide(this.scrollDirection);
      this.updateScrollState();

      // Change direction if we've reached the end of the scrollable area
      if (!this.isRightScrollable) {
        this.scrollDirection = 'left';
      } else if (!this.isLeftScrollable) {
        this.scrollDirection = 'right';
      }
    }, 1500); // Trigger every second
  }

  clearAutoScroll() {
    if (this.scrollIntervalId) {
      clearInterval(this.scrollIntervalId);
      this.scrollIntervalId = null;
    }
  }

  calculateScrollStep(): number {
    // Calculate scroll step based on the width of each card
    if (this.cardsContainers && this.cardsContainers.nativeElement) {
      const cardWidth = this.cardsContainers.nativeElement.children[0].offsetWidth + 15; // Assuming all cards have the same width
      console.log(cardWidth, "/////");
      return cardWidth;
    } else {
      return 0;
    }
  }

  slide1(direction: string) {
    if (this.cardsContainers) {
      const cards = this.cardsContainers.nativeElement;
      const scrollStep = 1140; // Adjust as needed

      if (direction === 'left') {
        // this.cardsContainers.nativeElement.scrollLeft -= 350;
        const newScrollLeft = cards.scrollLeft - scrollStep;
        cards.scrollLeft = Math.max(newScrollLeft, 0); // Ensure scrollLeft doesn't go below 0
      } else if (direction === 'right') {
        const newScrollLeft = cards.scrollLeft + scrollStep;
        cards.scrollLeft = Math.min(newScrollLeft, cards.scrollWidth - cards.clientWidth); // Ensure scrollLeft doesn't exceed scrollWidth
      }
    }
  }
}




import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  windowWidth: boolean = false
  @ViewChild('cards') cardsContainers: ElementRef | undefined;
  ngOnInit(): void {
    if (document.body.offsetWidth <= 1024) {
      this.windowWidth = true
    }
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

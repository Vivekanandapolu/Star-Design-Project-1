import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bachelor-design',
  templateUrl: './bachelor-design.component.html',
  styleUrls: ['./bachelor-design.component.scss']
})
export class BachelorDesignComponent implements OnInit {
  windowWidth: boolean = false;
  ngOnInit(): void {
    this.windowWidth = window.innerWidth <= 1024;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth <= 1024;
    });
  }
}

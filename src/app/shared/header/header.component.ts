import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropdown = false;
  dropdownItems = [
    'UI/UX Design',
    'AR-VR/UX Design',
    'UI/VI Design',
    'Bachelor Of Design',
    'Product Management',
    'Graphic Design'
  ];
  windowWidth: boolean = false
  constructor(private activatedParams: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.activatedParams.url);
    this.windowWidth = window.innerWidth <= 1024;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth <= 1024;
      if (this.windowWidth) {
        console.log("yess");
      }
    });
  }
}

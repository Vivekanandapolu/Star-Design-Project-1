import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showDropdown = false;
  dropdownItems = [
    'UI/UX Design',
    'AR-VR/UX Design',
    'UI/VI Design',
    'Bachelor Of Design',
    'Product Management',
    'Graphic Design'
  ];
}

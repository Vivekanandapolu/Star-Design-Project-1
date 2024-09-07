import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  phoneNumber = '+91 9985280011';

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
  course: any = false

  canvas: any = []
  private routerSubscription: Subscription;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.handleRouteChange();
      }
    });
  }
  ngOnInit(): void {
    this.windowWidth = window.innerWidth <= 1024;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth <= 1024;
    });

  }

  openMenu() {
    this.routerSubscription = this.router.events.subscribe(event => {
      console.log(event);
      if (event instanceof NavigationEnd && this.routerSubscription) {
        // Close offcanvas menu
        document.getElementsByClassName('offcanvas')[0]?.classList.add('d-none');
        document.getElementsByClassName('offcanvas')[0]?.classList.remove('show');

        // Reload the page from the top
        window.location.reload();
      }
    });
  }

  openWhatsApp() {
    const url = `https://web.whatsapp.com/send?phone=${this.phoneNumber}`;
    window.open(url);
  }


  handleRouteChange() {
    this.course = window.location.href.split('/').includes('Courses')
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}

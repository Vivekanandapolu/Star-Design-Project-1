import { Component, OnInit } from '@angular/core';
import { TitleService } from './shared/title.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      const content = document.querySelector('.content');

      if (preloader) {
        preloader.style.display = 'none';
      }
      if (content) {
        content.classList.remove('d-none');
      }
    });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(event => {
      this.titleService.setTitle(event['title']);
    });

  }
}



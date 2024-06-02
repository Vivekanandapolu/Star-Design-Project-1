import { Component } from '@angular/core';
import { TitleService } from './shared/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'star-design';
  constructor(private titleService: TitleService) {

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  phoneNumber = '+91 9985280011';
  windowWidth: boolean = false

  ngOnInit(): void {
    this.windowWidth = window.innerWidth <= 786;
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth <= 786;
    });
  }

  openWhatsApp() {
    const url = `https://web.whatsapp.com/send?phone=${this.phoneNumber}`;
    window.open(url);
  }

}

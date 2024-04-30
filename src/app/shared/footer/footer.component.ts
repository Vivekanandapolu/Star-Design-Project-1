import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  phoneNumber = '+91 9985280011';

  openWhatsApp() {
    const url = `https://web.whatsapp.com/send?phone=${this.phoneNumber}`;
    window.open(url);
  }

}

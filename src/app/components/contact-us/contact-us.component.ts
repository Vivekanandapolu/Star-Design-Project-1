import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  selectedMethod: string = 'whatsapp';
  placeholderText: string = 'WhatsApp number';

  updatePlaceholder() {
    switch (this.selectedMethod) {
      case 'whatsapp':
        this.placeholderText = 'WhatsApp number';
        break;
      case 'phonecall':
        this.placeholderText = 'Phone number';
        break;
      case 'email':
        this.placeholderText = 'E-mail address';
        break;
    }
  }


  openGoogleMapsDirection(location: string) {
    let destinationAddress = '';
    if (location === 'Hyderabad') {
      destinationAddress = 'Hitec City, 101N-Heights, 1st Floor, Siddiq Nagar, Hitec City, Hyderabad, Telangana 500081';
    } else if (location === 'Bengaluru') {
      destinationAddress = '1st floor, RMZ Latitude Commercial Building Bellary Rd, Hebbal, Bengaluru Karnataka 560024 India';
    }
    else if (location === 'Ameerpet') {
      destinationAddress = 'Meghamala Apartment road, Kumar Basti, Srinivasa Nagar, Ameerpet, Hyderabad, Telangana 500082';
    }
    else if (location === 'Himayat Nagar') {
      destinationAddress = '2nd Floor, Om Towers, Opposite McDonald’s, Himayatnagar Main Road, Hyderabad-500029 India';
    }
    else if (location === 'Hitech') {
      destinationAddress = 'Sowbagyas Amulyas Complex, Hitech City Rd, Jaihind Enclave, HITEC City, Hyderabad, Telangana 500081';
    }
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destinationAddress)}`;

    window.open(mapsUrl, '_blank');
  }

}

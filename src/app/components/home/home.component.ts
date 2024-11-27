import { Component, ViewChild, ElementRef, HostListener, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { apis } from 'src/app/shared/apiUrls';
import { environment } from 'src/app/shared/environments/environment.development';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('dropAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('1000ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ]
})


export class HomeComponent implements OnInit, OnDestroy {
  windowWidth: number = window.innerWidth;
  isLeftScrollable: boolean = false;
  isRightScrollable: boolean = false;
  @ViewChild('cards') cardsContainers: ElementRef | undefined;
  scrollIntervalId: any;
  scrollDirection: string = 'right';
  windowWidth786: boolean = false;
  image: any

  domain = environment.domain


  courseFiles: any = {
    bg_img: '',
    course_img: ""
  }


  addCourseForm: any = {}

  constructor(private titleService: Title, private metaService: Meta, private http: HttpClient, private modalService: NgbModal, private toastr: ToastrService) {

  }


  ngOnInit(): void {
    this.updateScrollState();
    this.startAutoScroll();
    this.windowWidth786 = window.innerWidth <= 786;
    window.addEventListener('resize', () => {
      this.windowWidth786 = window.innerWidth <= 786;
      this.updateScrollState();
    });
    this.setMeta();
  }

  openCourseModal(content: any) {
    this.modalService.open(content, {
      // size: 'lg',
      backdrop: 'static',
      keyboard: false
    })
  }


  uploadFile(e: any, type: any) {

    if (type == 'bg') {
      this.courseFiles.bg_img = ''
    }
    else {
      this.courseFiles.course_img = ''
    }

    const file = e.target.files[0]
    const fileformData = new FormData();
    fileformData.append('file', file, file?.name);
    this.http.post(apis.upload_file, fileformData).subscribe((res: any) => {
      if (res.success) {
        if (type == 'bg') {
          this.courseFiles.bg_img = res.file_url
        }
        else {
          this.courseFiles.course_img = res.file_url
        }
        this.toastr.success(res.message)
      }
      else {
        if (type == 'bg') {
          this.courseFiles.bg_img = res.file_url
        }
        else {
          this.courseFiles.course_img = res.file_url
        }
        this.toastr.error(res.message)
      }
    })
  }

  removeImg(type: any) {
    if (type == 'course') {
      this.courseFiles.course_img = "";
      return
    }
    else {
      this.courseFiles.bg_img = ""

    }
  }

  addCourseCard(form: NgForm) {
    console.log(form);
    if (form.invalid || (!this.courseFiles.bg_img || !this.courseFiles.course_img)) {
      form.form.markAllAsTouched();
      return
    }
    else {
      this.http.post(apis.add_course, form.value).subscribe((res: any) => {
        console.log(res);
      })
    }
  }

  setMeta() {
    // Set the meta title with keywords
    this.titleService.setTitle('Best UI/UX Design and Graphic Design Institute in Hyderabad | AR/VR Training');

    // Set the meta description with keywords
    this.metaService.updateTag({
      name: 'description',
      content: "Join the top UI/UX design institute in Hyderabad offering the best graphic design and AR/VR courses with placement. Discover your potential at the best coaching center for UI/UX, graphic design, and AR/VR training."
    });

    // Set additional meta keywords for SEO
    this.metaService.updateTag({
      name: 'keywords',
      content: 'UI/UX Design institute in Hyderabad, Best UI/UX coaching institute in Hyderabad, Best graphic design institute with placement, AR/VR UX design course Hyderabad, Top UX/VI institute in Hyderabad, Graphic design coaching Hyderabad'
    });
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.updateScrollState();
  }

  slide(direction: string) {
    if (this.cardsContainers) {
      const cards = this.cardsContainers.nativeElement;
      const scrollStep = this.calculateScrollStep(); // Calculate scroll step dynamically

      if (direction === 'left') {
        const newScrollLeft = cards.scrollLeft - scrollStep;
        cards.scrollLeft = Math.max(newScrollLeft, 0); // Ensure scrollLeft doesn't go below 0
      } else if (direction === 'right') {
        const newScrollLeft = cards.scrollLeft + scrollStep;
        cards.scrollLeft = Math.min(newScrollLeft, cards.scrollWidth - cards.clientWidth); // Ensure scrollLeft doesn't exceed scrollWidth
      }

      this.updateScrollState();
    }
  }

  updateScrollState() {
    if (this.cardsContainers) {
      const cards = this.cardsContainers.nativeElement;
      // Check if scroll is at the leftmost position
      this.isLeftScrollable = cards.scrollLeft > 0;
      // Check if scroll is at the rightmost position
      this.isRightScrollable = cards.scrollLeft < (cards.scrollWidth - cards.offsetWidth);

      if (!this.isRightScrollable) {
        this.scrollDirection = 'left';
      } else if (!this.isLeftScrollable) {
        this.scrollDirection = 'right';
      }
    }
  }

  startAutoScroll() {
    this.clearAutoScroll(); // Clear any existing intervals
    this.scrollIntervalId = setInterval(() => {
      this.slide1(this.scrollDirection);
      this.updateScrollState();
      if (!this.isRightScrollable) {
        this.scrollDirection = 'left';
      } else if (!this.isLeftScrollable) {
        this.scrollDirection = 'right';
      }
    }, 2000);
  }

  clearAutoScroll() {
    if (this.scrollIntervalId) {
      clearInterval(this.scrollIntervalId);
      this.scrollIntervalId = null;
    }
  }

  calculateScrollStep(): number {
    if (this.cardsContainers && this.cardsContainers.nativeElement) {
      const cardWidth = this.cardsContainers.nativeElement.children[0].offsetWidth + 15; // Assuming all cards have the same width
      return cardWidth;
    } else {
      return 0;
    }

  }

  slide1(direction: string) {
    if (this.cardsContainers) {
      const cards = this.cardsContainers.nativeElement;
      cards.style.transition = 'all 2s ease-in-out';
      const scrollStep = 365;
      if (direction === 'left') {
        const newScrollLeft = cards.scrollLeft - scrollStep;
        cards.scrollLeft = Math.max(newScrollLeft, 0); // Ensure scrollLeft doesn't go below 0
      } else if (direction === 'right') {
        const newScrollLeft = cards.scrollLeft + scrollStep;
        cards.scrollLeft = Math.min(newScrollLeft, cards.scrollWidth - cards.clientWidth); // Ensure scrollLeft doesn't exceed scrollWidth
      }
    }
  }

  ngOnDestroy(): void {
    this.clearAutoScroll();
  }
}



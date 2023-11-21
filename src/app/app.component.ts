// app.component.ts

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScroll();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const showBackToTopButton = scrollPosition > 200;

    const backButton = document.getElementById('back-to-top-button');
    if (backButton) {
      backButton.style.display = showBackToTopButton ? 'block' : 'none';
    }
  }
}

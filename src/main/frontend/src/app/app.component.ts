import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['.container { padding-top: 65px }'],
  template: `
    <div class="container">
      <app-ecommerce></app-ecommerce>
    </div>`
})
export class AppComponent {
  title = 'frontend';
}

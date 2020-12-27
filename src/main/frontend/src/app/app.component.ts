import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['.container { padding-top: 65px }'],
  template: `
    <div class="container">
      <app-home></app-home>
    </div>
    <router-outlet></router-outlet>
  `

})
export class AppComponent {
  title = 'frontend';
}

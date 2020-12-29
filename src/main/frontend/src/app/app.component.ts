import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['.container { padding-top: 5px }'],
  template: `
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">Hannes Ecommerce</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarResponsive" aria-controls="navbarResponsive"
                  aria-expanded="false" aria-label="Toggle navigation"
                  (click)="toggleCollapsed()">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarResponsive"
               [ngClass]="{'collapse': collapsed, 'navbar-collapse': true}">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#" routerLink="/">Home
                  <span class="sr-only">(current)</span>
                </a>
                <a class="nav-link" href="#" routerLink="login">Login
                  <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <router-outlet></router-outlet>
  `

})
export class AppComponent {

  title = 'frontend';
  collapsed = true;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}

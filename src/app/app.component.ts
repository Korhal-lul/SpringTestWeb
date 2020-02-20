import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpringTest';

  constructor(private router: Router) {
  }

  insert() {
    this.router.navigate(['insert']);
  }

  list() {
    this.router.navigate(['delete']);
  }

}

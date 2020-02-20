import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';
import {Pessoa} from '../pessoa';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  pessoa: Pessoa = new Pessoa(0, '', '', '', 0);
  message: any;

  constructor(private service: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public insert() {
    const response = this.service.insert(this.pessoa);
    response.subscribe((data) => this.message = data);
  }
}

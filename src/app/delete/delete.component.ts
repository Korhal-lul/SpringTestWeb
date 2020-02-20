import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  pessoas: any;

  constructor(private service: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
    const response = this.service.getAllPessoa();
    response.subscribe((data) => this.pessoas = data);
  }

}

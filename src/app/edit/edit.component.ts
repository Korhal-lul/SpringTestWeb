import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';
import {Pessoa} from '../pessoa';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pessoa: Pessoa = new Pessoa(0, '', '', '', 0);

  constructor(private service: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.update();
  }

  public update() {
    const id = localStorage.getItem('id');
    this.service.getOnePessoa(id).subscribe((data) => this.pessoa = data);
  }

  public edit(pessoa: Pessoa) {
    this.service.edit(pessoa).subscribe((data) => this.pessoa = data);
    this.router.navigate(['delete']);
  }
}

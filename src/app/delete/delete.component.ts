import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';
import {Pessoa} from '../pessoa';

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

  public delete(id: number) {
    const response = this.service.delete(id);

    response.subscribe((data) => this.pessoas = data);
  }

  public edit(pessoa: Pessoa) {
    localStorage.setItem('id', pessoa.id.toString());
    this.router.navigate(['edit']);
  }
}

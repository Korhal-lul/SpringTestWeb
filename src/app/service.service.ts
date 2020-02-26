import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pessoa} from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  public getAllPessoa() {
    return this.http.get('http://localhost:8080/getAllPessoa');
  }

  public insert(pessoa) {
    return this.http.post('http://localhost:8080/insert', pessoa, {responseType: 'text' as 'json'});
  }

  public delete(id) {
    return this.http.delete('http://localhost:8080/delete/' + id);
  }
  public edit(pessoa: Pessoa) {
    return this.http.put<Pessoa>('http://localhost:8080/edit/' + pessoa.id, pessoa);
  }

  public getOnePessoa(id) {
    return this.http.get<Pessoa>('http://localhost:8080/search/' + id);
  }

}

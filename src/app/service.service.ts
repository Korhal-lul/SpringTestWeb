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
}

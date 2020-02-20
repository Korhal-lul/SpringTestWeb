import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  public getAllPessoa() {
    return this.http.get('http://localhost:8080/getAllPessoa');
  }
}

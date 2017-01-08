import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Auth } from './auth';
import 'rxjs/add/operator/map';

/*
  Generated class for the Details provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Details {

  
  constructor(public http: Http, public authService: Auth) {
    
  }

  getDetails(){

    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Authorization', this.authService.token);

      this.http.get('https://tranquil-ravine-53347.herokuapp.com/api/todos', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });

  }

  createDetails(details){

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);

      this.http.post('https://tranquil-ravine-53347.herokuapp.com/api/todos', JSON.stringify(details), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });

    });

  }

  deleteDetails(id){

    return new Promise((resolve, reject) => {

        let headers = new Headers();
        headers.append('Authorization', this.authService.token);

        this.http.delete('https://tranquil-ravine-53347.herokuapp.com/api/todos/' + id, {headers: headers}).subscribe((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });

    });

  }

}

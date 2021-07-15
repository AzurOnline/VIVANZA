import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  homeUrl = 'http://localhost:4000/';
  serviceUrl = 'http://localhost:4000/api/';
  constructor(
    private http: HttpClient
  ) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': ''
    })
  }

  public EnviaEmail(data) {
    return this.http.post(this.serviceUrl + 'EnviarEmail/', data);
  }

  public SubeArchivos(formData:FormData) {
    return this.http.post(this.serviceUrl + 'SubeArchivos/', formData);
  }


}

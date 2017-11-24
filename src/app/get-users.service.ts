import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GetUsersService {
  //users:any;
  rootURL = 'https://reqres.in/';

  constructor(private http: HttpClient) {
  }

  loginUser(email, password): Observable<any> {
    //debugger;
    return this.http.post(this.rootURL + 'api/login', {
      "email": email,
      "password": password
    })
      .map((res: Response) => {
        console.log("login response" + JSON.stringify(res));
        return res;
      })
  }

  getUsers(): Observable<any[]> {
    //debugger;
    return this.http.get(this.rootURL + 'api/users')
      .map((res: Response) => {
        console.log(res); 
        return res;
      })
      //.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      .catch(error => Observable.throw("Error in x service"));
  }

  getUserDetails(id): Observable<any> {
    return this.http.get(this.rootURL + 'api/users/' + id)
      .map((res: Response) => {
        console.log(res);
        return res;
      })
      //.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
      .catch(error => Observable.throw("Error in x service"));
  }

  createNewuser(name, job): Observable<any> {
    //debugger;
    return this.http.post(this.rootURL + 'api/users', {
      "name": name,
      "job": job
    })
      .map((res: Response) => {
        console.log("Create response" + JSON.stringify(res));
        return res;
      })
  }

  updateUser(id, name, job): Observable<any> {
    //debugger;
    return this.http.put(this.rootURL + 'api/users/' + id, {
      "name": name,
      "job": job
    })
      .map((res: Response) => {
        console.log("Update response" + JSON.stringify(res));
        return res;
      })
  }

  deleteUser(id): Observable<any> {
    //debugger;
    return this.http.delete(this.rootURL + 'api/users/' + id)
      .map((res: Response) => {
        console.log("delete response" + JSON.stringify(res.status));
        return res.statusText;
      })
  } 

}


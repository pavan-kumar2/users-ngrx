import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = 'https://jsonplaceholder.typicode.com/users';

  constructor(private https: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.https.get<User[]>(this.api)
  }

}

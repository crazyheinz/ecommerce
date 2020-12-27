import {HttpClient} from '@angular/common/http';

export class UserService {

  private usersUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  }
}

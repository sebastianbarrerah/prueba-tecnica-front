import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../domain/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class GetUserByEmailService {
  
  constructor(private http: HttpClient) { }

  execute(email: string){
    return this.http.get<IUser>('http://localhost:8000/api/voters/' + email);
  }
}

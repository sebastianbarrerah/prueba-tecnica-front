import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../domain/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  
  constructor(private http: HttpClient) { }

  execute(){
    return this.http.get<IUser[]>('http://localhost:8000/api/voters');
  }
}

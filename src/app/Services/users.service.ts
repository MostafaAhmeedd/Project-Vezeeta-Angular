import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http:HttpClient) {}

  private readonly DB_URL = "http://localhost:3000/users";
  
  GetAllUsers(){
    return this.http.get(this.DB_URL);
  }
  GetUserByID(id:number){
    return this.http.get(this.DB_URL+"/"+id);
  }

  deleteUser(id: number): Observable<void> {
    const url = `${this.DB_URL}/${id}`;
    return this.http.delete<void>(url);
  }


  getUserById(userId: number): Observable<any> {
    const url = `${this.DB_URL}/${userId}`;
    return this.http.get<any>(url);
  }


  updateUser(userId: number, userData: any): Observable<any> {
    const url = `${this.DB_URL}/${userId}`;
    return this.http.put<any>(url, userData);
  }

  // addUser( userData: any): Observable<any> {
  //   let userId = 0;
  //   let users: any[];
  //   this.GetAllUsers().subscribe((users: any[]) => {
  //     // Process the users data here
  //     userId = users.length+1;
  //     const lastUser = users[users.length - 1];
  //     const lastId = lastUser.id;
  //   });

  //   const url = `${this.DB_URL}/${userId}`;
  //   return this.http.put<any>(url, userData);

  // }

  addUser(userData: any): Observable<any> {
  
   return this.http.post(this.DB_URL,userData)
  
  }
  

  
}



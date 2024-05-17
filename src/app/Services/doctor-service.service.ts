import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private readonly http:HttpClient) { }
    private readonly DB_URL="http://localhost:3000/doctors";

    GetAllDoctors(){
      return this.http.get(this.DB_URL);
    }
  }

import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DoctorServiceService } from '../../../Services/doctor-service.service';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [HttpClientModule,RouterModule],
  providers:[DoctorServiceService],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class DoctorsComponent {
  // doctor:{name: string, title:string, rating: number , ratingCount:number ,specialization:string,location:string,fees:number,waitingTime:number,phone:string} = 
  // { name: '', title: '', rating: 0,ratingCount:0 ,specialization:'',location:'',fees:0,waitingTime:0,phone:""};
  doctors: any = [];

constructor(private router: Router ,myRoute: ActivatedRoute, private Dservice:DoctorServiceService ) {
  
}
  ngOnInit(): void {
    this.Dservice.GetAllDoctors().subscribe({
      next:(data)=> {
        console.log(data)
        this.doctors=data;
      },
      error:(err)=> {},
      complete:()=> {},
    });}
 

}

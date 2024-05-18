import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DoctorServiceService } from '../../Services/doctor-service.service';
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

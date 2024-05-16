import { Component } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HttpClientModule , RouterModule , FormsModule],
  providers:[UsersService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  
  ID = 0;

  user: {id :number , username: string, phoneNum:string, email: string , password:string ,gender:string,birthday:string } = 
  { id : 0,username: '', phoneNum: '', email: '',password:'' ,gender:'',birthday:''};
  // Assuming 'gender' is the form control name
  constructor(private router: Router ,myRoute: ActivatedRoute, private UService:UsersService ){
    this.ID = myRoute.snapshot.params["id"];
  }


  ngOnInit(): void {
    this.UService.GetAllUsers().subscribe({
      next:(data)=> {
        let max=0;
        for (let index = 0; index <(data as any[]).length; index++)
          {
            const element= (data as any[])[index];
            let temp =Object.values(element)[0] as string 
            let converted = parseInt(temp)
            if(converted> max)
              {
                max =converted;
              }

          }
          this.user.id = max+1;
      },
      error:(err)=> {},
      complete:()=> {},
    });}
 


  AddUser() {
    this.UService.addUser(this.user).subscribe({
      next: () => {
        // User updated successfully, navigate to the user details page
        this.router.navigate(['/']);
        // routerLinkActive="active" routerLink="/students" 
      },
      error: (err) => {
        console.error('Error on adding user:', err);
        // Handle error, such as displaying an error message
      }
    });
  }

}

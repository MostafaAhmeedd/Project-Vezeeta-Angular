import { Component } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule , RouterModule , FormsModule],
  providers:[UsersService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: { email: string , password:string } = 
  { email: '',password:'' };

  constructor(private router: Router ,myRoute: ActivatedRoute, private UService:UsersService ){
   
  }

  users: any = [];
  
  ngOnInit(): void {
    this.UService.GetAllUsers().subscribe({
      next:(data)=> {
       this.users = data;
      //  console.log(this.users[0]['email']);
       
      },
      error:(err)=> {},
      complete:()=> {},
    });}

  LoginUser(){
    let log = false;
    for(let i=0; i < this.users.length;i++){
      if(this.users[i]['email']==this.user.email &&this.users[i]['password']==this.user.password ){
        log = true;
        break
      }
    }

    if(log){
      this.router.navigate(['/']);
    }else{
      alert('Invalid email or password. Please try again.');
      this.user.email='';
      this.user.password='';
      this.router.navigate(['/login']);
    }
    
  }
}

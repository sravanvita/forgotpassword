import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ResetpasswordForm!:FormGroup
  password:any
  title = 'forgotpassword';
  constructor(private FormBuilder:FormBuilder,
    private api:ApiService,
    private router:Router){}


    ngOnInit(): void {
      this.ResetpasswordForm=this.FormBuilder.group({
        password: [''],
        confirmpassword:['']
      })
    }
    resetpass(){
      this.api.forgot(this.ResetpasswordForm).subscribe((res:any)=>{
        this.password = res
        console.log(this.password,'password')
      })

    }

    save(){
    this.api.RESET(this.ResetpasswordForm).subscribe((res:any)=>{
      console.log(res,'res');
      this.password=res
      

    })      

      
    }
  
}

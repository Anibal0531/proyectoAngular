import { KeyValue } from '@angular/common';
import { PropertyWrite } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators,FormControl} from '@angular/forms';

import { ServiceImplService } from './service/serviceImpl/service-impl.service';
import { ServiceUserService } from './service/serviceUser/service-user.service';
import { UserService } from './service/user/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'gesotousuario';
  
    userServiceFrom = new FormGroup({
    id : new FormControl( '', Validators.required,),
      id_rol :new FormControl('', Validators.required),
      Nombre :new FormControl('', Validators.required),
      Activo : new FormControl('', Validators.required)
  })
  user:any

  constructor(
    public fb: FormBuilder,
    public serviceImplService : ServiceImplService, 
    public serviceUserService : ServiceUserService,
    public userService : UserService,
    
    ){
    }

  ngOnInit(): void {
   
  }

  
  
  guardar():void{
    this.userService.saveUser(this.userServiceFrom.value).subscribe(resp=>{
      this.userServiceFrom.reset();
      this.user.push(resp);
    },
      error => (console.error(error))
    )
  }
 
}

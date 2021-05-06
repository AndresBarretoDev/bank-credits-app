import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styles: [
  ]
})
export class RegisterFormComponent implements OnInit {

  registerForm:FormGroup;
  dataPrograms:any;
  constructor(private formBuild:FormBuilder, private api:ApiConnectionService, private modal: NzModalService) { }

  ngOnInit() {
    this.creatForm();
    this.handleProgramsList()
  }
  
  creatForm(){
    this.registerForm = this.formBuild.group({
      name:['',[Validators.required,Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]],
      family_name:['',[Validators.required,Validators.pattern('^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+[a-zA-Z0-9-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['',[Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(10)]],
      program:['',Validators.required],
      comment:[''],
    })
  }
  get errorControl(){
    return this.registerForm.controls
  }
  get validName(){
    return this.registerForm.get('name')?.invalid && this.registerForm.get('name')?.touched
  }
  get validFamilyName(){
    return this.registerForm.get('family_name')?.touched && this.registerForm.get('family_name')?.invalid
  }
  get validEmail(){
    return this.registerForm.get('email')?.touched &&  this.registerForm.get('email')?.invalid
  }
  get validPhone(){
    return this.registerForm.get('phone')?.touched &&  this.registerForm.get('phone')?.invalid
  }
  get validProgram(){
    return this.registerForm.get('program')?.touched &&  this.registerForm.get('program')?.invalid
  }
  get validComment(){
    return this.registerForm.get('comment')?.touched &&  this.registerForm.get('comment')?.invalid
  }

  
  handleRegister(dataForm:any){
    
    if(dataForm.invalid){
      return Object.values(dataForm.controls).forEach( (control:any) => {
        control.markAsTouched()
      });
    }
    this.api.saveRegister(dataForm.value).subscribe(resp =>{
      
      this.registerForm.reset()
      this.success(resp)
    })
    
  }
  handleProgramsList(){
    this.api.getPrograms().subscribe((program:any)=>{
      const removeDuplicate = program.filter((item, idx, arr)=>{
        return arr.findIndex(temp=> temp.id == item.id) === idx
      })
      this.dataPrograms = removeDuplicate
      
    })
  }
  success(response): void {
    this.modal.success({
      nzTitle: 'Envio exitoso',
      nzContent: 'El servidor responde '+response
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  message:string;
  reportingform:any;
  constructor(private formbuilder:FormBuilder) {
    // form reactive
    this.reportingform = this.formbuilder.group({
      idTecni: ['',[Validators.required]],
      idServi: ['',Validators.required],
      datStart: ['',Validators.required],
      datEnd: ['',Validators.required],
      Descript: ['',Validators.required]
    },{validator:this.checkDates})
   }
   
  //  volver mas facil el getter para acceder
   get f() { return this.reportingform.controls; }  

  ngOnInit(): void {
  }
  // recibimos el form
  onReporting():void{
    // validamos el form
      if(this.reportingform.valid === true){
        console.log('pass')
      }
  }

  checkDates(group: FormGroup) {

    console.log(group.controls.datEnd.value)
    if(group.controls.datEnd.value < group.controls.datStart.value) {
      return { notValid:true }
    }
    return null;
  }

}



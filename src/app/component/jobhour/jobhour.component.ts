import { Component, OnInit, Injectable } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// service
import { IasrestService } from '../../services/iasrest.service'
// interface 
import { Reporting } from '../../interface/IAS'

@Component({
  selector: 'app-jobhour',
  templateUrl: './jobhour.component.html',
  styleUrls: ['./jobhour.component.css']
})
export class JobhourComponent implements OnInit {
  // propiedades
  public calcForm:any;
  public calcend:Reporting[];
  constructor(private formbuilder:FormBuilder,private reportingService:IasrestService) {
    // form reactive
    this.calcForm = this.formbuilder.group({
      idTecni: ['',[Validators.required]],
      weekNum: ['',[Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  //  volver mas facil el getter para acceder
  get f() { return this.calcForm.controls; }  
// recibir datos por parte del form
  onCalc(){
    // si es valido el form
    if(this.calcForm.valid === true){
      // enviamos los datos obtenidos del form suscribiendonos para recibir respuesta del back
      this.reportingService.calcWeek(this.calcForm.value).subscribe((res:Reporting[])=>{
        this.calcend = res 
        console.log(res)
      },(error)=>{
        this.calcend = error.error
      })
    }
  }

}

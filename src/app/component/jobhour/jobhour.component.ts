import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// service
import { IasrestService } from '../../services/iasrest.service'
// interface 
import { Reporting } from '../../models/IAS'

@Component({
  selector: 'app-jobhour',
  templateUrl: './jobhour.component.html',
  styleUrls: ['./jobhour.component.css']
})
export class JobhourComponent implements OnInit {
  public calcForm:any;
  public calcend:Reporting[];
  constructor(private formbuilder:FormBuilder,private reportingService:IasrestService) {
    this.calcForm = this.formbuilder.group({
      idTecni: ['',[Validators.required]],
      weekNum: ['',[Validators.required]],
    })
   }

  ngOnInit(): void {
  }

  //  volver mas facil el getter para acceder
  get f() { return this.calcForm.controls; }  

  onCalc(){
    if(this.calcForm.valid === true){
      this.reportingService.calcWeek(this.calcForm.value).subscribe((res:Reporting[])=>{
        this.calcend = res 
        console.log(this.calcend)
      },(error)=>{
        console.log(error)
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// mydatapicker
import { IMyDpOptions } from "mydatepicker";
// service
import { IasrestService } from '../../services/iasrest.service'


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  // propiedad
  public message:string;
  public reportingform:any;
//   public myDatePickerOptions: IMyDpOptions = {
//     // other options...
//     dateFormat: 'dd.mm.yyyy',
// };  
constructor(private formbuilder:FormBuilder,private reportingService:IasrestService) {
    // form reactive
    this.reportingform = this.formbuilder.group({
      idTecni: ['',[Validators.required]],
      idServi: ['',Validators.required],
      datStart: ['',Validators.required],
      datEnd: ['',Validators.required],
      Descript: ['',Validators.required],
      // myDate: [null, Validators.required]
    },{validator:validateDate})
   }
   
  //  volver mas facil el getter para acceder
   get f() { return this.reportingform.controls; }  

  ngOnInit(): void {
  }
  // recibimos el form
  onReporting():void{
    // validamos el form
      if(this.reportingform.valid === true){
        this.reportingService.saveReporting(this.reportingform.value).subscribe((response) =>{
            this.message = response
        },(error)=>{
          console.log(error)
        }
        )
      }
  }


  
}

function validateDate(group: FormGroup) {
  if(group.controls.datStart.value && group.controls.datEnd.value) {
    if(group.controls.datStart.value > group.controls.datEnd.value){
      return { Datefail:true }
    }
  }
  return null;
}



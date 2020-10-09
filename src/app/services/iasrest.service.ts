import { Injectable } from '@angular/core';
// peticion http y observable
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IasrestService {

  public apirest:any = 'http://127.0.0.1:8000/api/'

  constructor(private http:HttpClient) { }

  // metodo guardar reporting
  saveReporting(reportData):Observable<any>{
    console.log(reportData)
    return this.http.post(this.apirest+'saveReporting/',reportData)
  }

}

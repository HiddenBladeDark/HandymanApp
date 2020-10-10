import { Injectable } from '@angular/core';
// peticion http y observable
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IasrestService {

  public apirest:any = 'http://127.0.0.1:8000/api/'

  constructor(private http:HttpClient) { }

  // metodo guardar reporting
  saveReporting(reportData):Observable<any>{
    // enviamos por post con los datos obtenidos del component form
    return this.http.post(this.apirest+'saveReporting/',reportData)
  }
  // consultar hora
  calcWeek(data:any):Observable<any>{
    const apiParams = new HttpParams().set('weekNum','41')
    // enviamos por get por http_path django
    return this.http.get(this.apirest+'calcHourJob/'+data['idTecni']+'/'+data['weekNum']+'/')
  }
}

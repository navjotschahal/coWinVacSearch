import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_SIGNATURES } from 'src/app/shared/constants/api.signatures';
import { ApiService } from 'src/app/shared/services/api.service';
import { Cowin } from "../models/cowin-vac-data.interface";
  
@Injectable({
  providedIn: 'root'
})
export class CowinQueryService {

  constructor(
    private apiService: ApiService
  ) { }

  getAvailableVaccacineCenters = (pincode, date): Observable<Cowin.CenterList> => {
    const payLoad = {pincode, date}
    return this.apiService.httpGet(API_SIGNATURES.apiCoVacAvailableAppointmentV2, payLoad)
  };
}

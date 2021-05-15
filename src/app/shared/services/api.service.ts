import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_SERVICES } from '../constants/api.constant-services';
import { API_SERVICE_API_SEPARATOR } from '../constants/api.signatures';
import { PRIMITIVE_CONSTS } from '../constants/primitives';
import { Utility } from '../Utility/utility';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  httpGet = (url: string, params?: any): Observable<any> => {
    const searchParams: string = params ? Utility.serialize(params) : PRIMITIVE_CONSTS.EMPTY_STR;
    return this.http.get(this.encodedUrl(url + searchParams));
  }

  private encodedUrl = (url: string): string => {
    const service_api: string[] = url.split(API_SERVICE_API_SEPARATOR, 2);
    return service_api[0] !== PRIMITIVE_CONSTS.EMPTY_STR ? API_SERVICES[service_api[0]] + service_api[1] : service_api[1];
  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_SERVICE_API_SEPARATOR } from '../constants/api.signatures';
import { PRIMITIVE_CONSTS } from '../constants/primitives';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  httpGet = (url: string, params?: any): Observable<any> => {
    return this.http.get(this.encodedUrl(url));
  }

  private encodedUrl = (url: string): string => {
    const service_api: string[] = url.split(API_SERVICE_API_SEPARATOR, 2);
    return service_api[0] !== PRIMITIVE_CONSTS.EMPTY_STR ? service_api[0] + service_api[1] : service_api[1];
  }

}

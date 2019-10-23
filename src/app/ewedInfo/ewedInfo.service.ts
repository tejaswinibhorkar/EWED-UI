import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EwedInfo } from './ewedInfo';
import { Observable } from "rxjs"

@Injectable()
export class EwedInfoService{
	
	constructor(
		private http: HttpClient 
		){}


	facilityUrl = 'http://localhost:8080/ewedService/getFacilityData/';
	facilityInfo: object[];

	getFacilityByFilter(FilterName: string, FilterValue: string, MinYear: string, MinMonth: string,
		 MaxYear: string, MaxMonth: string): Observable<EwedInfo[]>{
		return this.http.get<EwedInfo[]>(this.facilityUrl  + FilterName + '/' + FilterValue 
		+ '/' + MinYear + '/' + MinMonth + '/'+ MaxYear + '/' + MaxMonth);
	}
	
}
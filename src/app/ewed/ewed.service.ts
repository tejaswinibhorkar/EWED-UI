import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ewed } from './ewed';
import { EwedInfo } from '../ewedInfo/ewedInfo';
import { Observable } from "rxjs"

@Injectable()
export class EwedService{
	
	constructor(
		private http: HttpClient 
		){}

	configUrl = 'http://localhost:8080/ewedService/getAllFacilities/stateName/all';

	facilityUrl = 'http://localhost:8080/ewedService/getFacilityData/';
	facilityInfo: object[];

	getAllFacilities(): Observable<Ewed[]>{
		return this.http.get<Ewed[]>(this.configUrl)
	}

	// getFacilityByFilter(FilterName: string, FilterValue: string, MinYear: string, MinMonth: string,
	// 	 MaxYear: string, MaxMonth: string): Observable<EwedInfo[]>{
	// 	return this.http.get<EwedInfo[]>(this.facilityUrl + '/' + FilterName + '/' + FilterValue + '/' + MinYear + '/' + MinMonth + '/'+ MaxYear + '/' + MaxMonth);
	// }
	
}
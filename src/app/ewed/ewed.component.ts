import {Component, OnInit} from '@angular/core';
import {Ewed} from './ewed';
import { EwedInfo } from '../ewedInfo/ewedInfo';
import {EwedService} from './ewed.service';
import { FormBuilder, Validators } from '@angular/forms';  
import { Router } from '@angular/router';
import { EwedInfoService } from '../ewedInfo/ewedInfo.service';

@Component({
	selector: 'app-ewed',
	templateUrl: './ewed.component.html',
	styleUrls: ['./ewed.component.css']
})

export class EwedComponent implements OnInit{

	facilities: Ewed[];	
	facilitiesInfo: EwedInfo[];
	FromEwed: any;
	FilterName: string="stateName";
	FilterValue: string="Alabama";
	MinYear: string = "2014";
	MinMonth: string = "1";
	MaxYear: string = "2015";
	MaxMonth: string = "1";

  
	constructor(
		private formbulider: FormBuilder, 
		private _ewedService: EwedService, private _ewedInfoService: EwedInfoService,
		private _router: Router){}
	  
	  ngOnInit(): void {  
		this.FromEwed = this.formbulider.group({  
		Filter: ['', [Validators.required]],
		Value: ['', [Validators.required]],
		FromYear: ['', [Validators.required]],
		FromMonth: ['', [Validators.required]],  
		ToYear: ['', [Validators.required]],
		ToMonth: ['', [Validators.required]]      
		});  
		this.getFacility();
	}
  
	getFacility(): void{
		console.log("getFacility");

		this._ewedService.getAllFacilities().subscribe((facilityData) => {
		this.facilities = facilityData, 
		console.log(facilityData)
		}, 
		(error) => {
			console.log(error);
		});

		this.resetVariables();
	  }
  
	  resetVariables(): void{
		  this.FilterValue = "";
		  this.MaxYear="";
		  this.MaxMonth="";
		  this.MinYear="";
		  this.MinMonth="";
	  }

	  onSubmit() {
		this.FromEwed = this.formbulider.group({  
		Filter: ['', [Validators.required]],
		Value: ['', [Validators.required]],
		FromYear: ['', [Validators.required]],
		FromMonth: ['', [Validators.required]],  
		ToYear: ['', [Validators.required]],
		ToMonth: ['', [Validators.required]]      
		});  
		
		if (this.FromEwed.valid) {
		  console.log("Form Submitted - getFacility!");
		  this._ewedInfoService.getFacilityByFilter(this.FilterName, this.FilterValue, this.MinYear, this.MinMonth, this.MaxYear, this.MaxMonth);
		}
		this.resetVariables();
	  }
}
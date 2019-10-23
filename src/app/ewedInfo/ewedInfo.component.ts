import {Component, OnInit} from '@angular/core';
import { EwedInfo } from './ewedInfo';
import { FormBuilder, Validators } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';
import { EwedInfoService } from './ewedInfo.service';
import { AllFacilities } from './AllFacilities';


@Component({
	selector: 'app-ewedInfo',
	templateUrl: './ewedInfo.component.html',
	styleUrls: ['./ewedInfo.component.css']
})

export class EwedInfoComponent implements OnInit{

	facilitiesInfo: EwedInfo[];	
	allFacilityObject: AllFacilities;
	FromEwed: any;
	FilterName: string="";
	FilterValue: string="";
	MinYear: string = "";
	MinMonth: string = "";
	MaxYear: string = "";
	MaxMonth: string = "";
  
	constructor(
		  private formbulider: FormBuilder, 
		  private _ewedInfoService: EwedInfoService,
		  private _router: Router,
		  private route: ActivatedRoute ){
			
		if(this.route){
			this.FilterName = this.route.snapshot.params.FilterName;
			this.FilterValue = this.route.snapshot.params.FilterValue;
			this.MinYear = this.route.snapshot.params.MinYear;
			this.MinMonth = this.route.snapshot.params.MinMonth;
			this.MaxYear = this.route.snapshot.params.MaxYear;
			this.MaxMonth = this.route.snapshot.params.MaxMonth;
			this.getFacilityByFilter();
		}
	  }
	  
	  ngOnInit(): void {
		this.FromEwed = this.formbulider.group({  
		Filter: ['', [Validators.required]],
		Value: ['', [Validators.required]],
		FromYear: ['', [Validators.required]],
		FromMonth: ['', [Validators.required]],  
		ToYear: ['', [Validators.required]],
		ToMonth: ['', [Validators.required]]      
		  });  
		}
  
	getFacilityByFilter(): void{

		this.FromEwed = this.formbulider.group({  
		Filter: ['', [Validators.required]],
		Value: ['', [Validators.required]],
		FromYear: ['', [Validators.required]],
		FromMonth: ['', [Validators.required]],  
		ToYear: ['', [Validators.required]],
		ToMonth: ['', [Validators.required]]      
		});  

		this._ewedInfoService.getFacilityByFilter(this.FilterName, this.FilterValue, this.MinYear, this.MinMonth,
												this.MaxYear, this.MaxMonth).subscribe((facilityData) => 
												{
													this.allFacilityObject = facilityData['All Facilities'], 
													console.log(facilityData)
													}, 

												(error) => {
													console.log(error);
												});

		//this.resetVariables();
	  }
  
	  resetVariables(): void{
		  this.FilterName="";
		  this.FilterValue = "";
		  this.MaxYear="";
		  this.MaxMonth="";
		  this.MinYear="";
		  this.MinMonth="";
	  }

	  onSubmit() {
		if (this.FromEwed.valid) {
		  console.log("Form Submitted!");
		  this.getFacilityByFilter();
		}
	  }
}
import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-table-covid',
  templateUrl: './table-covid.component.html',
  styleUrls: ['./table-covid.component.css']
})
export class TableCovidComponent implements OnInit {
  public headers = ['Country', 'Cases', 'Deaths', 'Cases Today', 'Deaths Today'];
  public countries: any;
  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.populationTable();
  }

  populationTable(){
    this.covidService.list()
    .subscribe((response) =>{
      this.countries = response
    })
  }

}

import { Component, OnInit, Output } from '@angular/core';
import { EventList } from '../shared/model/event-list';
import { BlabermouthManagerService } from '../shared/blabermouth-manager.service';
import { Event } from '../shared/model/event';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  @Output() x : EventList;
  filter: Event = new Event()
  timemin: string = "15";
  filtershow = false;
  page: number
  from: string;
  to: string;
  constructor(private service: BlabermouthManagerService) { 
    console.log(this.x);
    this.getData(1);
  }

  togglefilter(){
    this.filtershow = !this.filtershow;
  }

  getData(page: number){
    var cfrom = "";
    var cto= "";
    if(this.timemin == ""){
      cfrom= this.from;
      cto = this.to;
    }
    this.service.getData(page,this.timemin,this.filter,cfrom,cto).subscribe(data => {this.x = data; this.page = this.x.number +1 ;});
  }

  ngOnInit() {
  }

  loadPage(){
    console.log(this.timemin)
    this.getData(this.page);
  }

  changeCity(e) {
    this.timemin = e;
    console.log(this.timemin)
  }
 
}

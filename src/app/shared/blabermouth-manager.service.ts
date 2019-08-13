import { Injectable } from '@angular/core';
import { EventList } from './model/event-list';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Event } from './model/event';

@Injectable({
  providedIn: 'root'
})
export class BlabermouthManagerService {

  //  apiUrl = 'http://localhost:8080/';
  //apiUrl = 'http://192.168.233.1:9099/';
  apiUrl = 'https://blabbermouth-manager-service.youthclubstage.de/';
  constructor(private http: HttpClient) { }

  

  getData(page: number,min :string,filter: Event,from: string,to: string): Observable<EventList> {
    return this.http.get<EventList>(this.apiUrl+
      'v1/events?pageSize=10'+
      '&page='+(page-1)+
      '&lastMinutes='+min+
      this.convert('&id=',filter.id)+
      this.convert('&state=',filter.state)+
      this.convert('&process=',filter.process)+
      this.convert('&previousMessage=',filter.previousMessage)+
      this.convert('&application=',filter.application)+
      this.convert('&version=',filter.version)+
      this.convert('&from=',from)+
      this.convert('&to=',to)
      )

    }
  
  convert(key: string,input: any){
    if(input == undefined){
      return "";
    }
    if(input == null){
      return "";
    }
    if(input == ""){
      return "";
    }
    return key+input;
  }

  handleError(error: any,data: Observable<EventList>): Observable<EventList> {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return data;  
  }
}

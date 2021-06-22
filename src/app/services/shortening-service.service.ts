import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl="https://api.shrtco.de/v2/";

@Injectable({
  providedIn: 'root'
})
export class ShorteningServiceService {

  constructor(
    private httpClient : HttpClient,
  ) { }

  getShort(url):Observable<any>{
    console.log("getShort: ")
    return this.httpClient.get<any>(apiUrl+"shorten?url="+url);
  }

  getInfo(){

  }

  //Local Storage
  getShortensFromStorage(){
    return localStorage.getItem("shortenList");
  }

  saveShortensAtStorage(list){
    return localStorage.setItem("shortenList",list);
  }

}

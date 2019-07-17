import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageIds } from '../model/message-ids.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getMessages(){
    return this.httpClient.get<MessageIds[]>('http://localhost:8083/message');
  }
  
}

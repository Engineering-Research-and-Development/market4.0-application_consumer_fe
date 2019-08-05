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

  getStartConsumer(){
    return this.httpClient.get<any>('http://localhost:8081/base-consumer/webapi/consumer/startConsumer');
  }

  getMessages(){
    return this.httpClient.get<MessageIds[]>('http://localhost:8081/base-consumer/webapi/consumer/allMessages');
  }
  
}

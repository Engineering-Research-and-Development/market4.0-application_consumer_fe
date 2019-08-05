import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { MessageIds } from '../model/message-ids.model';

@Component({
  selector: 'app-message-ids',
  templateUrl: './message-ids.component.html',
  styleUrls: ['./message-ids.component.css']
})
export class MessageIdsComponent implements OnInit {

  interval: any;
  messages: MessageIds[];
  consumerStarted: boolean = false;
  buttonConsumerStartedDisabled = false;

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      if(this.consumerStarted){
        this.httpClientService.getMessages().subscribe(
        response =>{        
          this.messages = response;
          }
        )
      }
      }, 500
    );
  }

  onStartConcumer() {
      this.buttonConsumerStartedDisabled = true;
      this.httpClientService.getStartConsumer().subscribe(
      response =>{
          let obj = JSON.parse(JSON.stringify(response));    
          this.consumerStarted = obj.consumerStarted; 
          if(this.consumerStarted==false){
            this.buttonConsumerStartedDisabled = false;
          }
        }
      );
    }
}

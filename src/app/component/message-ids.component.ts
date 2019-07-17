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

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.httpClientService.getMessages().subscribe(
      response =>{
        this.messages = response;
        }
      )
      }, 500
    );
  }

}

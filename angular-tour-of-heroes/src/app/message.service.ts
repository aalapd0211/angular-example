import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[]=[];
  constructor() { }

  getMessages(){
    return this.messages;
  }

  addMessage(message: string){
    this.messages.push(message)
  }

  clearMessages(){
    this.messages = [];
  }
}

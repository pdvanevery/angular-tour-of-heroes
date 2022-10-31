import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  //method that adds messages to cache
  add(message:string) {
    this.messages.push(message);
  }

  //method that clears messages from cache
  clear() {
    this.messages = [];
  }

  constructor() { }
}

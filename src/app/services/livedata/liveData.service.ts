import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';

export class LiveDataService {
  private url: string;  
  private socket;

  constructor() {
    const wLocation = window.location;

    if (window.location.port !== "") {
      this.url = `${wLocation.protocol}//${wLocation.hostname}:${wLocation.port}`;
    } else {
      this.url = `${wLocation.protocol}//${wLocation.hostname}`;
    }

    console.info(this.url);
  }
  
  sendMessage(topic, message){
    this.socket.emit(topic, message);
  }
  
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
    
    return observable;
  }  
}
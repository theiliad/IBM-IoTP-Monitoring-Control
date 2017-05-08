import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';

export class LiveDataService {
  private url = 'http://localhost:5000';  
  private socket;
  
  sendMessage(message){
    this.socket.emit('new-data', message);    
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
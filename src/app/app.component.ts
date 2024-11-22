import { Component } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  content = ''
  //Message是一個陣列，初始值為空陣列
  messages : Message[] = [];

  //void:不回傳任何值
  addMessage() :void {
    //在檢查是否為空字串，避免名稱或是內容是空值時也可以留言
    //trim:移除字串開頭與結尾的空白字元
    if(
      !this.name.trim() || !this.content.trim()
    ){
      return;
    }
    //用名稱跟內容產生一個留言的資料
    const message = new Message(this.name , this.content);

    //將留言的資料放進容器
    this.messages.push(message);

    //清空內容
    this.content = '';


  }
}

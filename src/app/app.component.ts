import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sgorod';
  days = ['Понедельник','Вторник','Среда','Четверг','Пятница']

  idList : any = []

  addLesson(){
    let id = localStorage.length
    this.idList.push(id)
    console.log(this.idList)
  }
  
  ngOnInit(){
    let ids = []
    for (let i = 0; i < localStorage.length; i++){ ids.push(i) }
    this.idList = ids
    console.log(this.idList)
  }
}

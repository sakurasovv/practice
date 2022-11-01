import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'sgorod';
  days = ['Понедельник','Вторник','Среда','Четверг','Пятница']
  accessList = ['Администратор', 'Учитель', 'Ученик']
  day = decodeURI(window.location.pathname).slice(1)
  access : string
  idList : any = [0, 1, 2, 3, 4, 5]

  setDay(value: string) {
    return this.day=value, this.idList = [0, 1, 2, 3, 4, 5]
  }

  setAccess(value:string) {
    return this.access = value, this.idList = [0, 1, 2, 3, 4, 5]
  }
  
  update() {
    this.idList = ['0', '1', '2', '3', '4', '5']
  }

  ngOnInit() {  
    this.update()
  }
}
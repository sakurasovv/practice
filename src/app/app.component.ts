import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'sgorod';

  days = ['Понедельник','Вторник','Среда','Четверг','Пятница']
  day = 'Понедельник'
  groups = ['Класс 1', 'Класс 2']
  group = 'Класс 1'
  accessList = ['Админ', 'Учитель', 'Ученик']
  access : string

  idList : any = [0, 1, 2, 3, 4, 5]

  setGroup(value: string)
  {
    return this.group=value, this.idList = [0, 1, 2, 3, 4, 5]
  }

  setDay(value: string)
  {
    return this.day=value, this.idList = [0, 1, 2, 3, 4, 5]
  }

  setAcess(value:string)
  {
    this.access = value
  }

  ngOnInit(){
    let ids: any = [0, 1, 2, 3, 4, 5]
    for (let i = 0; i < localStorage.length; i++)
    { 
      let idKey: any = localStorage.key(i)?.split(' ')
      if (idKey[1][0] === this.group[this.group.length - 1] && idKey[1][1]+idKey[1][2] === this.day[0]+this.day[1] )
      {
        ids[idKey[0][0]] = idKey[0][0]
      } else continue
    }
    this.idList = ids.sort()
  }
}

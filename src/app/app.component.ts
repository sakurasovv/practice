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

  accessList = ['Администратор', 'Учитель', 'Ученик']
  access : string

    

  idList : any = [0, 1, 2, 3, 4, 5]

  setDay(value: string)
  {
    return this.day=value, this.idList = [0, 1, 2, 3, 4, 5]
  }

  setAccess(value:string)
  {
    return this.access = value, this.idList = [0, 1, 2, 3, 4, 5]
  }

  update() {
    let ids: any = ['0', '1', '2', '3', '4', '5']
    for (let i = 0; i < localStorage.length; i++)
    { 
      let idKey: any = localStorage.key(i)
      if (idKey[1]+idKey[1] === this.day[0]+this.day[1] )
      {
        ids[idKey[0][0]] = idKey[0][0]
      } else continue
    }
    this.idList = ids.sort()
  }

  ngOnInit(){
    this.update()
  }
}
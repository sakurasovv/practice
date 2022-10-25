import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sgorod';
  daysEN = ['monday', 'tuesday','wednesday','thursday','friday']
  daysRU = ['Понедельник','Вторник','Среда','Четверг','Пятница']
  save(){
    let data = {
      item:'Математика',
      teacher:'Учитель 1',
      homework:'№3, 4',
      rate:5
    }
    localStorage.setItem('session', JSON.stringify(data))
  }
}

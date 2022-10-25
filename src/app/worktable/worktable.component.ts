import { Component, OnInit } from '@angular/core';
import { accessType } from '../access-type';

@Component({
  selector: 'worktable',
  templateUrl: './worktable.component.html',
  styleUrls: ['./worktable.component.scss']
})
export class WorktableComponent implements OnInit {

  constructor() { }
  items = ['', 'Урок отсутствует','Математика', 'Физкультура', 'Физика', 'Химия', 'Русский язык', 'Литература', 'География', 'Английский язык']
  teachers = ['', 'Без учителя', 'Учитель 1', 'Учитель 2']
  disable = false
  enable = false

  ngOnInit(): boolean {
      if (accessType === 'admin')
        return true
      else if (accessType === 'teacher')
        return this.enable = true
      else return this.enable = true, this.disable = true      
  }
}


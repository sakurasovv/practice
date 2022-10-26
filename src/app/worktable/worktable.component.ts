import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { accessType } from '../access-type';


@Component({
  selector: 'worktable',
  templateUrl: './worktable.component.html',
  styleUrls: ['./worktable.component.scss']
})
export class WorktableComponent implements OnInit {
  
  @Input() id: string
  @Input() group: string

  constructor() { }

  tableGroup : FormGroup


  ngOnInit() {
    const session = this.id
    if (localStorage.getItem(session)){
      let data : any = localStorage.getItem(session)
      data = JSON.parse(data)
      this.tableGroup = new FormGroup({
        item: new FormControl(data.item),
        teacher: new FormControl(data.teacher),
        homework: new FormControl(data.homework),
        rate: new FormControl(data.rate),
      })
    } else {
      this.tableGroup = new FormGroup({
        item: new FormControl(null),
        teacher: new FormControl(null),
        homework: new FormControl(null),
        rate: new FormControl(null),
      })
    }

    console.log()
    this.tableGroup.valueChanges.subscribe((value) => localStorage.setItem(session, JSON.stringify(value)))

  }

}


import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'worktable',
  templateUrl: './worktable.component.html',
  styleUrls: ['./worktable.component.scss']
})
export class WorktableComponent implements OnInit {
  
  @Input() id: string
  @Input() group: string
  @Input() day: string
  @Input() access: string
  constructor() { }

  tableGroup : FormGroup
  numberId : number
  
  teacherAcess: boolean
  studentAcess: boolean
  
  ngOnInit() : any {
    
      switch (this.access){
        case 'Ученик': this.teacherAcess = true, this.studentAcess = true; break
        case 'Учитель': this.teacherAcess = true, this.studentAcess = false; break
        case 'Админ' : this.teacherAcess = false, this.studentAcess = false; break
      }
    
    const session = this.id + this.group + this.day
    this.numberId = Number(this.id)
    if (localStorage.getItem(session)){

      let data : any = localStorage.getItem(session)
      data = JSON.parse(data)
      this.tableGroup = new FormGroup({
        item: new FormControl({value: data.item, disabled: this.teacherAcess}),
        teacher: new FormControl({value: data.teacher, disabled: this.teacherAcess}),
        homework: new FormControl({value: data.homework, disabled: this.studentAcess}),
        rate: new FormControl({value: data.rate, disabled: this.studentAcess}),
      })
    }
    else {
      this.tableGroup = new FormGroup({
        item: new FormControl({value: null, disabled: this.teacherAcess}),
        teacher: new FormControl({value: null, disabled: this.teacherAcess}),
        homework: new FormControl({value: null, disabled: this.studentAcess}),
        rate: new FormControl({value: null, disabled: this.studentAcess}),
      })
    }

    this.tableGroup.valueChanges.subscribe((value) => localStorage.setItem(session, JSON.stringify(value)))

    
  }

}


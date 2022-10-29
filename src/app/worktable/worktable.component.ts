import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'worktable',
  templateUrl: './worktable.component.html',
  styleUrls: ['./worktable.component.scss']
})
export class WorktableComponent implements OnInit {
  
  @Input() id: string
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
        case 'Администратор' : this.teacherAcess = false, this.studentAcess = false; break
      }
    
    const session = this.id + this.day
    this.numberId = Number(this.id)
    if (localStorage.getItem(session) !== null){

      let data : any = localStorage.getItem(session)
      data = JSON.parse(data)
      this.tableGroup = new FormGroup({
        item: new FormControl({value: data.item, disabled: this.teacherAcess}, Validators.required),
        homework: new FormControl({value: data.homework, disabled: this.studentAcess}, Validators.required),
        rate: new FormControl({value: data.rate, disabled: this.studentAcess}, Validators.required),
      })
    }
    else {
      this.tableGroup = new FormGroup({
        item: new FormControl({value: null, disabled: this.teacherAcess}),
        homework: new FormControl({value: null, disabled: this.studentAcess}),
        rate: new FormControl({value: null, disabled: this.studentAcess}),
      })
    }

    this.tableGroup.valueChanges.subscribe((value) => localStorage.setItem(session, JSON.stringify(value)))

    
  }

}


import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'worktable',
  templateUrl: './worktable.component.html',
  styleUrls: ['./worktable.component.scss']
})
export class WorktableComponent implements OnInit {
  constructor() { }
  @Input() id: string
  @Input() day: string
  @Input() access: string
  tableGroup : FormGroup
  numberId : number
  disableTeacherAcess: boolean
  disableAdminAcess: boolean
  
  ngOnInit() : any {
      switch (this.access){
        case 'Ученик': this.disableTeacherAcess = true, this.disableAdminAcess = true; break
        case 'Учитель': this.disableTeacherAcess = false, this.disableAdminAcess = true; break
        case 'Администратор' : this.disableTeacherAcess = false, this.disableAdminAcess = false; break
      }
    const session = this.id + this.day
    this.numberId = Number(this.id)
    if (localStorage.getItem(session)){
      let data : any = localStorage.getItem(session)
      data = JSON.parse(data)
      this.tableGroup = new FormGroup({
        item: new FormControl({value: data.item, disabled: this.disableAdminAcess}),
        homework: new FormControl({value: data.homework, disabled: this.disableTeacherAcess}),
        rate: new FormControl({value: data.rate, disabled: this.disableTeacherAcess}),
      })
    } else {
      this.tableGroup = new FormGroup({
        item: new FormControl({value: null, disabled: this.disableAdminAcess}),
        homework: new FormControl({value: null, disabled: this.disableTeacherAcess}),
        rate: new FormControl({value: null, disabled: this.disableTeacherAcess}),
      })
    }
    this.tableGroup.valueChanges.subscribe((value) => {
      let data : any = localStorage.getItem(session)
      data = JSON.parse(data)
      if (!value.item) {
        value.item = data.item
        localStorage.setItem(session, JSON.stringify(value))
      } else localStorage.setItem(session, JSON.stringify(value))
    })
  }
}


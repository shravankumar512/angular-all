import { EmpService, IEmp } from './emp.service';
import { EmpManageService } from './emp-manage.component';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl:'./emp.component.html'
})

export class EmpComponent implements OnInit {

  emplist:IEmp[];
 
  selectedName:string;
  msg:IEmp;
  
  constructor(
    private eser:EmpService, 
    private router:Router, 
    private route:ActivatedRoute,
    private emc:EmpManageService) {
  }

  ngOnInit() {
	
    this.emplist = this.eser.getEmpList();
  
    this.emc.curmsg.subscribe(submsg=>{
      this.msg = submsg
    })
  }

  isSelected(i) {
    return i.name === this.selectedName;
  }

  onSelect(i) {
    this.selectedName = i.name;
    this.emc.changeMessage(i);
    this.router.navigate([this.selectedName], { relativeTo: this.route });
  }
}

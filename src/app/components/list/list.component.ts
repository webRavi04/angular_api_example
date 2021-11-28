import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(public service:MainService, private router:Router) { }
  storeData:any = {};
  ngOnInit(){
    this.service.getData().subscribe((data:any) => {
      console.log(data);
      this.storeData = data.data;
    })
  }

  deleteCall(id:any){
    this.service.deleteData(id).subscribe((data:any) => {
      console.log(data);
    })
  }

  logout() {
    // this.authenticationService.logout();
    this.router.navigate(['/login']);
}
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restircted-page',
  templateUrl: './restircted-page.component.html',
  styleUrls: ['./restircted-page.component.scss']
})
export class RestirctedPageComponent implements OnInit{

  token: string | null = null;

  constructor(){

  }

  ngOnInit(): void {
      this.token = sessionStorage.getItem('token');
  }


}

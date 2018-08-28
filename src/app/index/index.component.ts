import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  testString: any = {
    header : "หัวข้อเหตุผล",
    body : "Use AD’TID by usierra to upload to or download UI elements from a centralized library, and share them with your team."
  }
  testArray: any[] = [];
  targetDetail : any = {
    header: "ADTID HEADER",
    body : "Choose from all sorts of user triggers to define rich interactions. You can reproduce any action you can think of without technical expertise"
  }
  targetDetailList = [];
  rewardList = [];
  rewardDetail = {
    content : "ได้รับทุนการศึกษา 2,000 บาท พร้อมแพคเกจคอร์สเรียนยูเซียร่า"
  }
  newsList = [];
  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 6; i++) {
      this.testArray.push(this.testString);
      this.targetDetailList.push(this.targetDetail)
    }
    this.targetDetailList.splice(0,1);

    for(let j = 0; j < 4; j++) {
      this.newsList.push("a");
      this.rewardList.push(this.rewardDetail)
    }
    this.rewardList.splice(0,1)

    
  }

}

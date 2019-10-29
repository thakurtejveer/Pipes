import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{song | titlecase}}</h2>
  <h2>{{lyrics | slice:8:53}}</h2>
  <h2>{{quality | json }}</h2>

  <h2>{{57.771 | number:'3.4-5'}}</h2>
  <h2>{{0.98 | percent}}</h2>
  <h2>{{771|currency:'INR'}}</h2>
  <h2>{{771|currency:'INR':'code'}}</h2>
  <h2>{{date}}</h2>
  <h2>{{date | date:'short'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>
  <h2>{{date | date:'medium'}}</h2>
  <h2>{{date | date:'mediumDate'}}</h2>
  <h2>{{date | date:'mediumTime'}}</h2>
  <h2>{{date | date:'long'}}</h2>
  <h2>{{date | date:'longDate'}}</h2>
  <h2>{{date | date:'longTime'}}</h2>

  <h2>{{name}}</h2>
  
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public name="Serhat Durmus";
  public song="la calin";
  public lyrics="Hug me, hug me, hug So good-natured and don't let ...Hug me, hug me, hug";
  public date= new Date();
  
  constructor() { }

  ngOnInit() {
  }

  public quality= {
    "voice":"first class",
    "pitch" :"sharp"
  }


}

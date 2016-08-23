import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  private type:String = 'all';
  private indents:Array<{}> = [];
  constructor(private navCtrl: NavController) {
    for(let i = 1;i<4;i++){
      this.getIndents(i);
    }
  }
  getIndents(index:number){
    this.indents.push({
      id:index,
      type:1,
      name:`店铺_${index}`,
      image:"http://www.gbtags.com/gb/laitu/200x200",
      commodity:[
          {
            id:index,
            type:index,
            name:`商品_${index}`,
            image:"http://www.gbtags.com/gb/laitu/200x200",
            number:2,
            money:15
          },
          {
            id:index,
            type:index,
            name:`商品_${index}`,
            image:"http://www.gbtags.com/gb/laitu/200x200",
            number:4,
            money:17
          }
      ]
    });
  }
}

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private slides:Array<{}> = [];
  private slideOptions:any = {autoplay:4000, initialSlide:0, loop:true, pager:true};
  private stores:Array<{}> = [];
  constructor(private navCtrl: NavController) {
    for(let i = 1;i<4;i++){
      this.getSlides(i);
      this.getStores(i);
    }
  }
  getSlides(index:number){
    this.slides.push({
      index,
      image:"http://www.gbtags.com/gb/laitu/400x200"
    });
  }
  getStores(id:number){
    this.stores.push({
      id,
      name:`店铺_${id}`,
      image:"http://www.gbtags.com/gb/laitu/200x200",
      number:241512,
      actives:[1]
    })
  }
}

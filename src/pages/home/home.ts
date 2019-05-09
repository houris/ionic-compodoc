import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items;

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider) {

  }
  ionViewDidLoad() {
    this.items = this.dataService.getData();
  }
  viewItem() {
    console.log(this.items);
  }
}

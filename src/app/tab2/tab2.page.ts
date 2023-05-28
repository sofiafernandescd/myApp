import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ModalpagePage } from '../modalpage/modalpage.page';
import { PLAYERS } from '../players';
import { Player } from '../player';


import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;

  selected_index = 0;

  logActiveIndex() {
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
  }
  
  players: Player[] = PLAYERS;

  constructor(
    public modalCtrl: ModalController, 
    public actionSheetController: ActionSheetController) { }


  // https://ionicframework.com/docs/v6/api/action-sheet
  async openMenu() {
    
    const actionSheet = await this.actionSheetController.create({
      header: 'Player',
      mode: 'ios',
      buttons: [
        {
        text: 'Play Video',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
          this.presentModal();
        }
      }, 
      {
        text: 'Follow',
        icon: 'logo-twitter',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, 
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
      }
  }] 
});
    await actionSheet.present();
  }


  async presentModal() {
    this.getInfo();
    let url = this.players[this.selected_index].url;
    const modal = await this.modalCtrl.create({
          component: ModalpagePage,
          componentProps: { value: url }
    });
    return await modal.present();
  }

  getInfo() {
    //this.slides.getActiveIndex().then((data: any) => {
    //      console.log("active index", data);
    //      this.selected_index = data;
    //});
    console.log(this.swiperRef?.nativeElement.swiper.activeIndex);
    //let data = this.swiperRef?.nativeElement.swiper.activeIndex;
    //this.selected_index = data;

  }

  //swiperSlideChanged(e: any) {
  //  console.log("slide changed", e);
  //}

}

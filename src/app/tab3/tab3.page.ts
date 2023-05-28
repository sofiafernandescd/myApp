import { Component } from '@angular/core';
import { VIDEOS } from '../videos';
import { NavController } from '@ionic/angular';
import { VideoplayPage } from '../videoplay/videoplay.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  videos = VIDEOS;
  //component = VideoplayPage;

  constructor(public nav: NavController) {}

  ngOnInit() {
  }

  OpenNavVideoPlay(id:number) {
    this.nav.navigateForward("/videoplay/:" + id);
    console.log ("teste" + id);
  }
}



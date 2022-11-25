import { Component, ElementRef, ViewChild } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { Geolocation } from '@capacitor/geolocation'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  @ViewChild('map') mapView: ElementRef;
  ionViewDidEnter(){
    this.createMap();
  }

  createMap(){
    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;

    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      zoom: 5

    });

    CapacitorGoogleMaps.addListener('onMapReady', async () =>{
      CapacitorGoogleMaps.setMapType({
        type: "normal" //
      });
      this.showCurrentPosition();
    });
  }
  async showCurrentPosition(){

  }
  ionViewDidLeave(){
    CapacitorGoogleMaps.close();
  }

}

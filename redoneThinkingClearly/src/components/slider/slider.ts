import { Component } from '@angular/core';

/**
 * Generated class for the SliderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderComponent {

  text: string;

  constructor() {
    console.log('Hello SliderComponent Component');
    this.text = 'Hello World';
  }

}

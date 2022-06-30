import { LightningElement } from 'lwc';

export default class LearnCustomLightningCrad extends LightningElement {
    slotchangeHandler(){
        const footElmt = this.template.querySelector('footer')
        if(footElmt){
        footElmt.classList.remove('slds-hide')
        }
    }
}
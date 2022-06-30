import { LightningElement } from 'lwc';

export default class LearnSlotDemoChild extends LightningElement {

    footerchangeHandler(){
        const footElm = this.template.querySelector('.slds-card__footer')
        if(footElm){
            footElm.classList.remove('slds-hide')
        }
    }
}
import { LightningElement } from 'lwc';

export default class LearnC2pParentComponent extends LightningElement {
    showModal = false;
    msg;
    msg1;
    clickHandler(){
        this.showModal = true;
    }
    okcloseHandler(event){
        this.msg = event.detail.imp
        this.msg1 = event.detail.emp

        this.showModal = false;
    }
}
import { LightningElement } from 'lwc';

export default class LearnC2pModalComponent extends LightningElement {

    okcloseHandler(){
        const myEvent = new CustomEvent('close',{
            bubbles: true,
            detail: {
                imp: "Modal Closed Successfully !!!",
                emp: "Thanks!!!"
            }
        })
        this.dispatchEvent(myEvent)
    }
    /*footerHandler(){
        console.log('footerHandler is called...');
    }*/
}
import { LightningElement } from 'lwc';

export default class LearnLifeCycleChildHook extends LightningElement {

    constructor(){
        super()
        console.log('Child Constructor Called');
    }
    connectedCallback(){
        console.log('Child Connectedcallback Called');
        throw new Error('Loading of child component failed') /* this add for Error Phase Demo */
    }
    renderedCallback(){
        console.log('Child RenderedCallback Called');
    }
    /* Unmounting Phase
    disconnected Callback() Demo*/
    disconnectedCallback(){
        alert('Child disconnectedCallback called !!!')
    }
}
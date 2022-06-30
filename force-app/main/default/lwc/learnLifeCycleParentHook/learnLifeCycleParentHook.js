import { LightningElement } from 'lwc';

export default class LearnLifeCycleParentHook extends LightningElement {

    constructor(){
        super()
        console.log('Parent Constructor Called');
    }
    connectedCallback(){
        console.log('Parent Connectedcallback Called');
    }
    renderedCallback(){
        console.log('Parent RenderedCallback Called');
    }
    name;
    changeHandler(event){
        this.name = event.target.value;
    }
    /* Unmounting Phase
    disconnected Callback() Demo*/
    ischildvisible = false;
    handleClick(){
        this.ischildvisible = !this.ischildvisible;
    }
    /* Error Phase
    errorCallback Demo */
   errorCallback(error,stack){
        console.log(error.message);
        console.log(stack); /* stack is in the form of string which tells that while rendering which component you see this error*/
   }
}
import { LightningElement } from 'lwc';

export default class LearnShadowDomStylingDemo extends LightningElement {
    isLoaded = false;
    renderedCallback(){
        if(this.isLoaded) return
        const style = document.createElement('style')
        style.innerText = `c-learn-shadow-dom-styling-demo .slds-button{
            background: red;
            color: white;
        }`
        this.template.querySelector('lightning-button').appendChild(style)
        this.isLoaded = true;
    }
}
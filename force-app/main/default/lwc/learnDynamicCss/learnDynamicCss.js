import { LightningElement } from 'lwc';

export default class LearnDynamicCss extends LightningElement {
    widprct = 70;
    percent= 75;
    changeHandler(event){
        this.percent= event.target.value;
    }
    get percentage(){
        return `width:${this.percent}%`
    }
    changeHandWid(event){
        this.widprct= event.target.value;
    }
    get widthprctg(){
        return `width:${this.widprct}%`;
    }
}
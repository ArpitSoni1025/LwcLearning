import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
export default class LearnCurrentReference extends LightningElement {
    @wire(CurrentPageReference)
    pageRef
    get pageReference(){
        return this.pageRef ? JSON.stringify(this.pageRef, null, 2):''    //here 2 is the tab space.
    }
}
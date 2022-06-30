import { LightningElement,api } from 'lwc';

export default class LearnSetterDemoChild extends LightningElement {
    userDetail
    @api
    get detail(){
        return this.userDetail
    }
    set detail(data){
        let newAge = data.age*2
        this.userDetail= {...data, age:newAge, "location":"Melbourne"}
    }
}
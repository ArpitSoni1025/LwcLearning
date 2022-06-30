import { LightningElement, track } from 'lwc';

export default class Twowaydatabinding extends LightningElement {

/**** Part 1: Data Binding Demo Example****/
@track fullname="Arpit Soni";
@track title="Trainee Salesforce Developer";
changeHandler(event){
    this[event.target.name]= event.target.value;
}
/**** Part 2: track properties demo  example ****/
address={
    city:'Indore',
    postcode:452012,
    country:'India'
}
trackHandler(event){
    //this.address.city= event.target.value;
    this.address = {...this.address, "city": event.target.value}
}
/**** Part 3: Getter Demo example ****/
users=["arpit","neeraj","pushpraj"]
num1 = 10
num2 = 20
get firtsUser(){
    return this.users[0].toUpperCase();
}
get multiply(){
    return this.num1 * this.num2
}
/**** Part 4: Conditional Rendering Demo Example ****/
/**** card for if:true demo ****/
/**** card for if:false demo ****/
/**** card for toggle demo ****/

@track showText = false;
@track hideText = false;
@track toggleText = false;

showHandler(){
    this.showText = true;
}
hideHandler(){
    this.hideText = true;
}
toggleHandler(){
    this.toggleText = !this.toggleText;
}

/**** card for if:true and if:false with same button ****/
isVisible = false;
visibleHandler(){
    this.isVisible = true;
}
/**** Type a correct word(Hello) to see the data ****/

name
changeHelloHandler(event){
this.name = event.target.value
}
get helloMethod(){
    return this.name === 'Hello';
}
}

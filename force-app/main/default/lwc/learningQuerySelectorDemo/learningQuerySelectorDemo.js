import { LightningElement } from 'lwc';

export default class LearningQuerySelectorDemo extends LightningElement {
    userNames = ["Arpit","Pushpraj","Neeraj","Utkarsh"]
    fetchHandler(){
       const eleme = this.template.querySelector('h1')
       console.log(eleme.innerText);
       eleme.style.border = "1px solid red";
       
       const userElements = this.template.querySelectorAll('.name')
       Array.from(userElements).forEach(item=>{
        console.log(item.innerText);
        item.setAttribute("title", item.innerText)
       })
       
       /// lwc:dom="manual" demo
       const childElement = this.template.querySelector('.child')
       childElement.innerHTML ='<p>Hey I am a child within this tag</p>'
    }

}
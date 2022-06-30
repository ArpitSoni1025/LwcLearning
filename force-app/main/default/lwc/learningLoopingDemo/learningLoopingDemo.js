import { LightningElement } from 'lwc';

export default class LearningLoopingDemo extends LightningElement {
    carList=["Ford","Maruti","Audi","Hyundai","BMW"]

    ceoList= [
        {
            id:1,
            company:"Google",
            name:"Sundar Pichai"
        },
        {
            id:2,
            company:"Apple",
            name:"Tim Cook"
        },
        {
            id:3,
            company:"Facebook",
            name:"Mark Zuckerberg"
        },
        {
            id:2,
            company:"Amazon",
            name:"Jeff Bezos"
        }
    ]
}
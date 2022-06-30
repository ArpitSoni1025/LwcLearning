import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.description';
import DESCRIPTION_TWO from '@salesforce/label/c.descriptionTwo';
export default class LearnCustomLabelsDemo extends LightningElement {
      
    Labels = {
        descriptionOne: DESCRIPTION_ONE,
        descriptionTwo: DESCRIPTION_TWO
    }
}
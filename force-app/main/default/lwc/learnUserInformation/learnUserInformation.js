import { LightningElement } from 'lwc';
import ID from '@salesforce/user/Id';
import IS_GUEST from '@salesforce/user/isGuest';
export default class LearnUserInformation extends LightningElement {
    userId = ID;
    Guest = IS_GUEST;
}
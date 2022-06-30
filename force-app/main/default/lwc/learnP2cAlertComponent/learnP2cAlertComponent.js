import { LightningElement,api } from 'lwc';

export default class LearnP2cAlertComponent extends LightningElement {
    @api message
    @api cardHeading
    @api number
    @api isValid
}
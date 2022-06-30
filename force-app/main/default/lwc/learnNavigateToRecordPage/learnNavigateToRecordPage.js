import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class LearnNavigateToRecordPage extends NavigationMixin(LightningElement) {

    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0035g00000FPKYrAAP',
                objectApiName: 'Contact',
                actionName: 'view'
            }
        })
    }

    recordEditMode(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0035g00000FPKYrAAP',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        })
    }
}
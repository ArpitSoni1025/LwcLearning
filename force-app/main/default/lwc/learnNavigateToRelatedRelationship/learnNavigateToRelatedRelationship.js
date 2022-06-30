import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class LearnNavigateToRelatedRelationship extends NavigationMixin(LightningElement) {
    navigateToRelatedList(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '0015g00000hh5yXAAQ',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName:'view'
            }
        })
    }
}
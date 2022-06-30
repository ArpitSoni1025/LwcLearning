import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class LearnNavigateToAuraComponent extends NavigationMixin(LightningElement) {

    navigateToAuraCmp(){
        this[NavigationMixin.Navigate]({
            type:"standard__component",
            attributes: {
                componentName:"c__AuraNavigation"
            },
            state: {
                "c__id":"abc123456789xyz"
            }
        })
    }
}
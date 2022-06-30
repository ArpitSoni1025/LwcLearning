import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class LearnNavigateToNavItemPage extends NavigationMixin(LightningElement) {

    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Styling_In_LWC'
            }
        })
    }
}
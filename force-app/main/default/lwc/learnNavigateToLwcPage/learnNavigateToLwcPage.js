import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class LearnNavigateToLwcPage extends NavigationMixin(LightningElement) {

    navigateToLwcPage(){
        var defination={
            componentDef:'c:navigationLwcTarget',
            attributes: {
                recordId:'abc782634289'  // pass this record id to navigationLwcTarget by adding @api decorator
            }
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#'+ btoa(JSON.stringify(defination))
            }
        })
    }
}
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class LearnNavigateToVfPage extends NavigationMixin(LightningElement) {
    navigateToVfPage(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes:{
                url:"/apex/navigateVfPage"
            } // this above method comes as promise so to listen the promise we use then() method.
        }).then(generatedUrl=>{
            console.log(generatedUrl);
            window.open(generatedUrl)
        })
    }
}
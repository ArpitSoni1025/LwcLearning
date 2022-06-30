import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LearnToastNotification extends LightningElement {

    toastHandler(){
        const evt = new ShowToastEvent({
            title: 'Success!!!',
            message: '{0} Successfully created {1}', //{0} index 0 'Salesforce' and {1} index 1 object in which url and label available form messageData
            variant: 'success',
            messageData: ['Salseforce',{
                url: 'https://www.salesforce.com/',
                label: 'Click Here'                     //by default mode is dismissable
            }]
        })
        this.dispatchEvent(evt);
    }

    showToast(title, message, variant){
        const evt1 = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:['New Release',{url:'https://www.salesforce.com/',label:'Click'}],
            mode: 'sticky'
        })
        this.dispatchEvent(evt1)
    }

    toastErrHandler(){
        this.showToast("Error!!!", "Creation failed...", "error")    
    }
    toastWarHandler(){
        this.showToast("Warning!!!", "Something went wrong", "warning")    
    }
    toastInfHandler(){
        this.showToast("Info!!!", "{0} Updation is available {1}", "info")   //{0} index 0 'New Release' and {1} index 1 object in which url and label available form messageData
    }
}
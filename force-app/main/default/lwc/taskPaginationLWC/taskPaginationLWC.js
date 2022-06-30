import { LightningElement, track, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TaskPaginationLWC extends LightningElement {
    //Boolean tracked variable to indicate if modal is open or not default value is false as modal is closed when page is loaded 
@track showPage1=true;
@track showPage2=false;
@track showPage3=false;
@track showModal=false;
@api recordId;
@track record;
@track error;
@track name;
start = Date.now();

@wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
wiredAccount({ error, data }) {
        if (data) {
            console.log(" data"+JSON.stringify(data));
            this.record = data;
            this.name=this.record.fields.Name.value;
            console.log(" data"+JSON.stringify(data.fields.Name.value));

            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.record = undefined;
        }
    }
    get name() {
        console.log( this.data.fields.Name.value);
        return this.record.fields.Name.value;
        //   this.name;
    }
    visiblePage1()
    {
     this.showPage1=true;
     this.showPage2=false;
     this.showPage3=false;   
    }

visiblePage2()
{
    this.showPage2=true;
    this.showPage1=false;
    this.showPage3=false;
}

visiblePage3()
{
    this.showPage3=true;
    this.showPage2=false;
}

closeModal() {
    // to close modal set isModalOpen tarck value as false
    this.showModal=false;
}
openModal() {
    // to open modal set isModalOpen tarck value as true
    this.showModal = true;
    this.showPage1 = true;
    this.showPage2 = false;
    this.showPage3 = false;
    
}

submitDetails() {
    // to close modal set isModalOpen tarck value as false
    //Add your code to call apex method or do some processing
    this.showPage1 = false;
    this.showPage2 = false;
    this.showPage3 = false;
    const evt = new ShowToastEvent({
        title: 'Success',
        message: 'Form Submit SuccessFull',
        variant: 'success',
        mode: 'dismissable'
    });
    eval("$A.get('e.force:refreshView').fire();");
    this.dispatchEvent(evt);
}
}
import { LightningElement, api, wire } from 'lwc';
import Contact_OBJECT from '@salesforce/schema/Contact';
import FirstName_FIELD from '@salesforce/schema/Contact.FirstName';
import LastName_FIELD from '@salesforce/schema/Contact.LastName';
import Email_FIELD from '@salesforce/schema/Contact.Email';
import Phone_FIELD from '@salesforce/schema/Contact.Phone';
import Fax_FIELD from '@salesforce/schema/Contact.Fax';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import {getRecord, getFieldValue } from 'lightning/uiRecordApi';


export default class RecordFormStaticContact extends LightningElement {
    // Flexipage provides recordId and objectApiName
    @api recordId;
    currentpage =1;
    totalPage = 3;
    Numone = false;
    NumTwo = false;
    Numthree = false;
    objectName = Contact_OBJECT;
    name = '';

    @wire(getRecord, { recordId: '0035g00000FFpvPAAT', fields: [NAME_FIELD] })
    contactHandler({data, error}){
        if(data){
            this.name = getFieldValue(data, NAME_FIELD);
            console.log('name is:' +this.name);
        }
        if(error){
            console.log(error);
        }
    }


    fieldsDisplay={
        firstnameField:FirstName_FIELD,
        lastnameField:LastName_FIELD,
        emailField:Email_FIELD,
        phoneField:Phone_FIELD,
        faxField:Fax_FIELD
    }
    renderedCallback(){

        if(this.currentPage == 1){
         this.Numone = true
         this.disableSubmit=true
         
        }
        if(this.currentPage == 2){
         this.NumTwo = true
         this.disableSubmit=true
        
        }
        if(this.currentPage == 3){
         this.Numthree = true
         this.disableSubmit=false
        
        }
     }

    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
    
     previousHandler(){
        if(this.currentpage==2){
            this.currentPage -=1
            this.Numone=true;
            this.Numtwo=false;
            this.Numthree=false;
        }
        else if (this.currentpage==3) {
            this.currentPage -=1
            this.Numone=false;
            this.Numtwo=true;
            this.Numthree=false;
        }
     }
    nextHandler(){
        if(this.currentPage == 1){
            this.currentPage =  this.currentPage + 1
            console.log('1');
            this.Numone = false
            this.NumTwo = true
            this.Numthree = false
        }
        else if (this.currentPage == 2){
            this.currentPage =  this.currentPage + 1
            console.log('2');
            this.Numone = false
            this.Numtwo = false
            this.Numthree = true
           
        }
    }
}
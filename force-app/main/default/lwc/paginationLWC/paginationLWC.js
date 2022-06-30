import { LightningElement, wire } from 'lwc';
import getOppList from '@salesforce/apex/PaginationLWCCtrl.getOppList';
import getAccList from '@salesforce/apex/PaginationLWCCtrl.getAccList';
export default class PaginationLWC extends LightningElement {
    totalOpp;
    visibleOpp

    totalAcc
    visibleAcc
    @wire(getOppList)
    wiredOpportunity({error,data}){
        if(data){
            this.totalOpp = data
            console.log(this.totalOpp);
        }
        if(error){
            console.error(error);
        }
    }
    updateOppHandler(event){
        this.visibleOpp = [...event.detail.records]
        console.log(event.detail.records);
    }

    @wire(getAccList)
    wiredAccount({error,data}){
        if(data){
            this.totalAcc = data
            console.log(this.totalAcc);
        }
        if(error){
            console.error(error);
        }
    }
    updateAccHandler(event){
        this.visibleAcc = [...event.detail.records]
        console.log(event.detail.records);
    }
}
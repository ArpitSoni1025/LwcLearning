import { LightningElement, api} from 'lwc';

export default class Pagination extends LightningElement {
totalrecords
@api recordSize = 5
currentpage = 1
totalPage = 0
get records(){
    return this.visibleRecords
}
@api
set records(data){
    if(data){
        this.totalrecords = data
        this.recordSize = Number(this.recordSize)
        this.totalPage = Math.ceil(data.length/this.recordSize)
        this.updateRecords()
    }
}
nextHandler(){
    if(this.currentpage < this.totalPage){
        this.currentpage = this.currentpage+1
        this.updateRecords()
    }
}
previousHandler(){
    if(this.currentpage > 1){
        this.currentpage = this.currentpage-1
        this.updateRecords()
    }
}
get disableNext(){
    return this.currentpage >= this.totalPage
}
get disablePrevious(){
    return this.currentpage <=1
}
updateRecords(){
    const start = (this.currentpage-1)*this.recordSize
    const end = this.recordSize*this.currentpage
    this.visibleRecords= this.totalrecords.slice(start, end)
    this.dispatchEvent(new CustomEvent('update', { 
        detail:{
            records:this.visibleRecords
        }
    }))
}
}
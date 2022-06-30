import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData';
import myCustomPermission from '@salesforce/customPermission/show_details';
export default class LearnCheckPermissionDemo extends LightningElement {

    get hasViewAllDataAvailable(){
        return hasViewAllData
    }

    get hasCustomPermission(){
        return myCustomPermission
    }
}
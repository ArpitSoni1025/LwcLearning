import {
	LightningElement,
	api,
	track,wire
} from 'lwc';
import ID_FIELD from '@salesforce/schema/Opportunity.Id';
//import getOpportunityList from '@salesforce/apex/goOrNoGoProjectCntrl.getOpportunityList'
import { getRecord,updateRecord } from "lightning/uiRecordApi";
import Pitch_Score from '@salesforce/schema/Opportunity.Pitch_Score__c';
import Pitch_Level from '@salesforce/schema/Opportunity.Pitch_Level__c';
import Pitch_Message from '@salesforce/schema/Opportunity.Pitch_Message__c'
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// import { CloseActionScreenEvent } from 'lightning/actions';
// import Opportunity from '@salesforce/schema/Opportunity';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class goOrNoGoProject extends LightningElement {
	@api recordId;
	@track sum;
	@track Lockval = false;
	Val1 = 0;
	Val2 = 0;
	Val3 = 0;
	Val4 = 0;
	Val5 = 0;
	Val6 = 0;
	Val7 = 0;
	Val8 = 0;
	Val9 = 0;
	Val10 = 0;
	Val11 = 0;
	@track PitchLevel;
	@track PitchSCore;
	@track PitchMsg;
	
	sum = 0;
	change = "resultdiv";
	pitchsc
	pitchle
	pitchmsg



	@wire(getRecord, {recordId:'$recordId', fields:[Pitch_Score, Pitch_Level, Pitch_Message]})
    wiredContact({data,error}){
        if(data){ 
           
            console.log(JSON.stringify(data))
			this.pitchsc = JSON.stringify(data.fields.Pitch_Score__c.value)
			this.pitchle = JSON.stringify(data.fields.Pitch_Level__c.value)
			this.pitchmsg = JSON.stringify(data.fields.Pitch_Message__c.value)
			console.log("this.pitchsc"+this.pitchsc);
			console.log("this.pitchle"+this.pitchle);
			console.log("this.pitchmsg"+this.pitchmsg);

			this.sum = this.pitchsc
			this.sum2 = this.pitchle
			this.sum3 = this.pitchmsg
			
			if(this.pitchsc >0 && this.pitchsc <= 39){
				this.change = "pink";
				this.Lockval = true;
			
			}
			if(this.pitchsc >=40 && this.pitchsc <= 69){
				this.change = "orange";
				this.Lockval = true;
			}
			if(this.pitchsc >=70 && this.pitchsc <= 99){
				this.change = "green";
				this.Lockval = true;
			}
			if(this.pitchsc >=100 && this.pitchsc <= 110){
				this.change = "dgreen";
				this.Lockval = true;
			}

        }
        if(error){
            console.error(error)
        }
    }
	
	handleChange(event) {
		console.log('event: ' + JSON.stringify(event.currentTarget.name));
		console.log('event value is: ' + JSON.stringify(event.target.value));

		if (event.target.name == "s1") {
			this.Val1 = parseInt(event.target.value);
		}
		if (event.target.name == "s2") {
			this.Val2 = parseInt(event.target.value);
		}
		if (event.target.name == "s3") {
			this.Val3 = parseInt(event.target.value);
		}
		if (event.target.name == "s4") {
			this.Val4 = parseInt(event.target.value);
		}
		if (event.target.name == "s5") {
			this.Val5 = parseInt(event.target.value);
		}
		if (event.target.name == "s6") {
			this.Val6 = parseInt(event.target.value);
		}
		if (event.target.name == "s7") {
			this.Val7 = parseInt(event.target.value);
		}
		if (event.target.name == "s8") {
			this.Val8 = parseInt(event.target.value);
		}
		if (event.target.name == "s9") {
			this.Val9 = parseInt(event.target.value);
		}
		if (event.target.name == "s10") {
			this.Val10 = parseInt(event.target.value);
		}
		if (event.target.name == "s11") {
			this.Val11 = parseInt(event.target.value);
		}
		this.sum = parseInt(this.Val1) + parseInt(this.Val2) + parseInt(this.Val3) + parseInt(this.Val4) + parseInt(this.Val5) + parseInt(this.Val6) + parseInt(this.Val7) + parseInt(this.Val8) + parseInt(this.Val9) + parseInt(this.Val10) + parseInt(this.Val11);


		
		if (this.sum <= 110) {
			if (this.sum == 0) {
				this.change = "grey";
				this.template.querySelector('.da2').innerHTML = "GO OR NO GO?";
				this.template.querySelector('.da').innerHTML = "-";
				this.PitchSCore = this.sum;
				this.PitchLevel="GO OR NO GO?";
				this.PitchMsg="-";
			}
			if (this.sum > 0 && this.sum <= 39) {
				this.change = "pink";
				this.template.querySelector('.da2').innerHTML = "DON'T PITCH!";
				this.template.querySelector('.da').innerHTML = "The opportunity might look attractive but you don't have the right experience or haven't built the right level relationship. Both are crucial, even over attractiveness. The opportunity may be tempting but remember the chances of winning are low. Send a letter of apology expressing an interest in working together in the future and refer the contact to the State Business Development Manager to arrange a time to meet.";
				// =================================updateOpp store in opp. object========================================
				this.PitchSCore = this.sum;
				// console.log("Pitch score" + this.updateOpp.PitchSCore);
				this.PitchLevel="DON'T PITCH!";
				// console.log("Pitch Level" + this.updateOpp.PitchLevel);
				this.PitchMsg="The opportunity might look attractive but you don't have the right experience or haven't built the right level relationship. Both are crucial, even over attractiveness. The opportunity may be tempting but remember the chances of winning are low. Send a letter of apology expressing an interest in working together in the future and refer the contact to the State Business Development Manager to arrange a time to meet. ";
				// console.log("Pitch Msg" + this.updateOpp.PitchMsg);

			}
			if (this.sum >= 40 && this.sum <= 69) {
				this.change = "orange";
				this.template.querySelector('.da2').innerHTML = "STANDARD PITCH!";
				this.template.querySelector('.da').innerHTML = "Templated pitch solution that requires minimal time investment. The opportunity is fairly attractive and you are in an OK position. If you proceed, adopt a 'should win' or 'could win' approach depending on where the evaluation sits.";
				this.PitchSCore = this.sum;

				this.PitchLevel = "STANDARD PITCH!";

				this.PitchMsg = "Templated pitch solution that requires minimal time investment. The opportunity is fairly attractive and you are in an OK position. If you proceed, adopt a 'should win' or 'could win' approach depending on where the evaluation sits.";

			}
			if (this.sum >= 70 && this.sum <= 99) {

				this.change = "green";
				this.template.querySelector('.da2').innerHTML = "CLEVER PITCH!";
				this.template.querySelector('.da').innerHTML = "You are in a strong position to win with the client and the opportunity is fairly attractive. Invest time in customising your strategy and messaging - do something different to disrupt the clients thinking and views - be bold and brave, deliver ideas. You have nothing to lose and everything to gain. Your Pitch representative can help you craft a winning strategy.";
				this.PitchSCore = this.sum;
				console.log("Pitch score" + this.PitchSCore);
				this.PitchLevel = "CLEVER PITCH!";
				console.log("Pitch Level" + this.PitchLevel);
				this.PitchMsg = "You are in a strong position to win with the client and the opportunity is fairly attractive. Invest time in customising your strategy and messaging - do something different to disrupt the clients thinking and views - be bold and brave, deliver ideas. You have nothing to lose and everything to gain. Your Pitch representative can help you craft a winning strategy.";
				console.log("Pitch Msg" + this.PitchMsg);
			}
			if (this.sum >= 100 && this.sum <= 110) {
				// alert("this sum >=70 or <=99")

				this.change = "dgreen";
				this.template.querySelector('.da2').innerHTML = "ALL OUT PITCH!";
				this.template.querySelector('.da').innerHTML = "You are in a strong position on a very attractive opportunity. Take a bespoke approach to craft a pitch completely to the suitability of the client - win at all costs! Don't delay - bring this opportunity to your Pitch representative immediately!";
				// =================================updateOpp store in opp. object========================================
				this.PitchSCore = this.sum;
				//   console.log("Pitch score" + this.updateOpp.PitchSCore);
				this.PitchLevel = "ALL OUT PITCH!";
				//   console.log("Pitch Level" + this.updateOpp.PitchLevel);
				this.PitchMsg = "You are in a strong position on a very attractive opportunity. Take a bespoke approach to craft a pitch completely to the suitability of the client - win at all costs! Don't delay - bring this opportunity to your Pitch representative immediately!";
				//   console.log("Pitch Msg" + this.updateOpp.PitchMsg);
			}
		}
	}
    

	handleClick() {
		console.log("this is handle click blog");
		this.Lockval = true;
		const fields = {};

		fields[ID_FIELD.fieldApiName] = this.recordId;
		console.log(this.recordId);

		fields[Pitch_Score.fieldApiName] = this.PitchSCore;
		console.log(this.PitchSCore);

		fields[Pitch_Level.fieldApiName] = this.PitchLevel;
		console.log(this.PitchLevel);

		fields[Pitch_Message.fieldApiName] = this.PitchMsg;
		console.log(this.PitchMsg);

		const recordInput = {
			fields
		};
		console.log('recordInput: ' + recordInput);
		updateRecord(recordInput)
			.then((result) => {
				console.log(JSON.stringify(result));
			})
			.catch(error => {
				console.log(JSON.stringify(error));
			});
	}
}
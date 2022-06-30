public with sharing class goOrNoGoProjectCntrl {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunityList(){
        
       return [SELECT Id,Pitch_Score__c,Pitch_Level__c,Pitch_Message__c
        FROM Opportunity ];
       
    }
}

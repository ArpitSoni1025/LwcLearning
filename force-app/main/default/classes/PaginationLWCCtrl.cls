public with sharing class PaginationLWCCtrl {
    @AuraEnabled(cacheable = true)
    public static List<Opportunity> getOppList(){
        return [SELECT Id, Name FROM Opportunity];
    }
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccList(){
        return [SELECT Id, Name FROM Account];
    }
}
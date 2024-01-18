sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'kusuma/papp/purchaseorder/test/integration/FirstJourney',
		'kusuma/papp/purchaseorder/test/integration/pages/POsList',
		'kusuma/papp/purchaseorder/test/integration/pages/POsObjectPage',
		'kusuma/papp/purchaseorder/test/integration/pages/PurchaseOrderItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('kusuma/papp/purchaseorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemSetObjectPage: PurchaseOrderItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);
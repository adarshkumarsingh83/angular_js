myAngularApplicationRoot.value("welcomeMessage", {messageContent: "Welcome To Application"});

myAngularApplicationRoot.provider("MyApplicationProvider", [ function () {

    function getMessageFromProvider(welcomeMessage) {
        console.log("MyApplicationProvider");
        return welcomeMessage.messageContent;
    }

    return {
        $get: function (welcomeMessage) {
            return {
                messageProviderValue:function(){
                    return getMessageFromProvider(welcomeMessage);
                }
            };
        }
    };
}
]);
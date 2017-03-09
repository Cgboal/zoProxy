var login = require("facebook-chat-api");

login({email: "username", password: "password"}, function callback(err, api) { //<-- enter your facebook credentials
	if(err) return console.error(err);
    
    var convoId = 0000000; //target thread ID.
    
    api.listen(function callback(err, message) {
        if (message.threadID == 1742983145941866) {
            api.sendMessage(message.body, convoId);
        } else if (message.threadID == convoId) {
            api.sendMessage(message.body, 1742983145941866);

        }
    });
});

    

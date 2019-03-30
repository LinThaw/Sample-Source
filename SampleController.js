({
	doSubmit : function(component, event, helper) {        
        var isCorrect = component.get("v.selected");
        if(!isCorrect){
            component.find('notifLib').showNotice({
                "variant": "error",
                "header": "Not Selected",
                "message": 'Please select checkbox',
                closeCallback: function() {
                    // do something
                }
            });             
        } else {
            component.find('notifLib').showNotice({
                "variant": "success",
                "header": "Perfect",
                "message": 'Congrats',
                closeCallback: function() {
                    // do something
                }
            });   
        }
	}
})

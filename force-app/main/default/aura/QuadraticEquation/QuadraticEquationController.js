({
    doInit: function (component, event, helper) {
        component.set("v.solution", "Nothing to solve yet");
        component.set("v.equationParams", []);
        component.set("v.isFormValid", false);
    },
    
    handleUpdateSolution: function (component, event, helper) {
        // Getting new solution value from event parameter which we sets before firing this event 
        var updatedSolution = event.getParam("solution");
        component.set("v.solution", updatedSolution);
    }
})
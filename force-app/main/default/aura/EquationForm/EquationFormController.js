({
    solve: function (component, event, helper) {
        var equationParams = component.get("v.equationParams");
        helper.findSolution(component, equationParams);
    },

    // custom validation handler for numbers
    valueChangeValidation: function (component, event, helper) {
        var value;
        var isValidEqParams = component.find('equationForm').reduce(function (validSoFar, inputCmp) {
            value = inputCmp.get('v.value');
            // if the current parameter of eq isn't number we are setting validity to false and showing error msg  
            if (!helper.filterFloat(value)) {
                inputCmp.set('v.validity', { valid: false, badInput: true })
            }
            // "summarize" validates of each input 
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // only if all coefficients of equation are valid we enabling submit button
        component.set("v.isFormValid", isValidEqParams);
    }
})
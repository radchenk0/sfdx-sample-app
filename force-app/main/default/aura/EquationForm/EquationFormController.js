({
    solve: function (component, event, helper) {
        var equationParams = component.get("v.equationParams");
        helper.findSolution(component, equationParams);
    },

    }
})
({
    // solving quadratic equation
    findSolution: function (component, equationParams) {
        var a = equationParams[0],
            b = equationParams[1],
            c = equationParams[2],
            D = Math.pow(b, 2) - 4 * a * c,
            solution,
            sqrtD;
        
        if (+a == 0) {
            solution = "Equation is linear. Root is x = " + (-c/b);
        }
        else if (D < 0) {
            solution = "No real roots. Cause is discriminant D = " + D + " < 0";
        }
        else if (D == 0) {
            solution = "Single root is x = " + (-b/(2*a));
        }
        else {
            var sqrtD = Math.sqrt(D);
            solution = "Roots are x1 = " + (-b + sqrtD)/(2*a) + " and x2 = " + (-b - sqrtD)/(2*a);
        }

    },

    // Validation helper for filtering floats(Angular4 working example)
    filterFloat: function (value) {
        return !isNaN(value - parseFloat(value));
    }

})
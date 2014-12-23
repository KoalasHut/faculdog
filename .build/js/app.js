'use strict';


requirejs.config({
    paths: {}
});


require([/* Dependencies */], function () {

    var app = {
        initialize: function () {
            // Your code here

            // Get all slider instances and create full sliders
            $('#slides').superslides({
            	'inherit_height_from': '.slides-container'
            });
        }
    };

    app.initialize();

});

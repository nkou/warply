import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model) {
        // Set the IndexController's `title`.
        controller.set('title', 'My offers');
        // Set the model property containing our dummy data.
        controller.set('model', model);
    },
    model() {
        // Populate the model with data.
        return [{
            id: 0,
            product: "Φακές Ψιλές",
            location: "athinas 2",
            status: "open",
            until: "4/11/2015",
            capacity: "3000",
            min_bid: "3000",
            high_bid: "3100"
        }, {
            id: 1,
            product: "Φακές Ψιλές",
            location: "athinas 2",
            status: "closed",
            until: "4/11/2015",
            capacity: "1000",
            min_bid: "1000",
            high_bid: "1200"
        }, {
            id: 2,
            product: "Φακές Ψιλές",
            location: "athinas 2",
            status: "pending",
            until: "4/11/2015",
            capacity: "2000",
            min_bid: "2000",
            high_bid: "2100"
        }];
    }
});
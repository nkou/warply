import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller) {
        // Set the OfferController's `title`.
        controller.set('title', 'New offer');
    }
});
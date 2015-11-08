import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller) {
        // Set the ProfileController's `title`.
        controller.set('title', 'Profile');
    }
});
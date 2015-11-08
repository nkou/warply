import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
//    rootURL: '/nikos_kouroupas/',
    location: config.locationType
});

Router.map(function() {
    // Mapping the App Routes
    this.route('profile', { path: '/profile' });
    this.route('offer', { path: '/offer' });
    this.route('offers');
});

export default Router;

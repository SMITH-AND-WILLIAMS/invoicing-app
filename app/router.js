import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('', function() {
    this.route('authenticated', function() {
      this.route('my-account', function() {
        this.route('company');
      });
    });
  });
});

export default Router;

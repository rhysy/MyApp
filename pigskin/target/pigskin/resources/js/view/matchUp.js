App.MatchUpView = Ember.View.extend({

    /*templateName: 'templates/matchUp',*/
    template: Handlebars.templates['matchUp'],
    matchUp: function() {
        return this.get('controller.model');
    }.property('controller.model')

});

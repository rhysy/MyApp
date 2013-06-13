App.Router.map(function(){
    this.resource('gameWeeks', function(){
        this.resource('gameWeek', {path: ':gameWeeks_id'});
    })
});

App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo('gameWeeks');
    }
});

App.GameWeeksRoute = Ember.Route.extend({
    model: function() {
        return App.GameWeek.find();
    }
});

App.GameWeekRoute = Ember.Route.extend({
    model: function(params) {
        return App.GameWeek.find(params.gameWeeks_id);
    }
});

App.GamesController = Ember.ArrayController.extend({

    unselectedGames: function() {
         return this.filterProperty('selectedTeam', null).get('length');
    }.property('@each.selectedTeam'),

    inflection: function() {
        var unSelectedGames = this.unselectedGames;
        return unSelectedGames === 1 ? 'selection' : 'selections';
    }.property('unselectedGames'),

    hasGames: function() {
        return this.get('model.length') > 0;
    }.property('model.games')
});

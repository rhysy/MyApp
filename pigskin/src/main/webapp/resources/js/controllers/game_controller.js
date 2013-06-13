App.GameController = Ember.ObjectController.extend({

        hasSelection: function() {
            return this.get('model.selectedTeam') !== null;
        }.property('model.selectedTeam'),

        isHomeTeamSelected: function(key, value) {
            return this.setOrGetSelectedTeam(key ,value, 'homeTeam');
        }.property('model.selectedTeam'),

        isVisitingTeamSelected: function(key, value) {
            return this.setOrGetSelectedTeam(key ,value, 'visitingTeam');
        }.property('model.selectedTeam'),

        isVisitingTeamFavored: function() {
            var model = this.get('model');
            return model.get('favoredTeam') === model.get('visitingTeam');
        }.property('model.favoredTeam'),

        setOrGetSelectedTeam: function(key, value, team) {
            var model = this.get('model');
            if (value === undefined) {
                return model.get('selectedTeam') === model.get(team);
            } else {  // setter call
                if (value === true) {
                    model.set('selectedTeam', model.get(team));
                    return true;
                } else {
                    model.set('selectedTeam', null);
                    return false;
                }
            }
        }
});

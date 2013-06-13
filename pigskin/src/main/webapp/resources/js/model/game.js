App.Game = DS.Model.extend({
    homeTeam: DS.belongsTo('App.Team'),
    visitingTeam: DS.belongsTo('App.Team'),
    favoredTeam: DS.belongsTo('App.Team'),
    selectedTeam: DS.belongsTo('App.Team'),
    spread: DS.attr('number')
});
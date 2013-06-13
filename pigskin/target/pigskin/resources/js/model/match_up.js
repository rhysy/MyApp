App.MatchUp = DS.Model.extend({
    homeTeam: DS.belongsTo('App.Team'),
    visitingTeam: DS.belongsTo('App.Team'),
    favorite: DS.belongsTo('App.Team'),
    spread: DS.attr('number'),
    pick: DS.belongsTo('App.Team')
});
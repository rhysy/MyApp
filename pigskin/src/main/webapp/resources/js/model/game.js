App.Game = DS.Model.extend({
    homeTeam: DS.belongsTo('App.TeamWrapper'),
    visitingTeam: DS.belongsTo('App.TeamWrapper'),
    spread: DS.attr('number')
});
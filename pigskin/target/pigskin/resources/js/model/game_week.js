App.GameWeek = DS.Model.extend({
    weekNumber: DS.attr('number'),
    matchUps: DS.hasMany('App.MatchUp')
});
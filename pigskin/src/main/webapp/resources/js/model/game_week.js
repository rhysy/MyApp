App.GameWeek = DS.Model.extend({
    weekNumber: DS.attr('number'),
    games: DS.hasMany('App.Game')
});
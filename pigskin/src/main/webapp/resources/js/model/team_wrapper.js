App.TeamWrapper = DS.Model.extend({
    team: DS.belongsTo('App.Team'),
    isSelected: DS.attr('boolean'),
    isFavored: DS.attr('boolean')
});
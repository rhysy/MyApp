App.GameView = Ember.View.extend({

    templateName: 'game',
    isPicked: function() {
        debugger;
        return this.get('controller.model.pick') === team;
    }

});

var IndexView = function() {

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        // this.el.on('keyup', '.search-key', this.findByName);
    };

    this.render = function() {
        var source = $("#home-tpl").html();
        var template = Handlebars.compile(source);
        $('body').append(template(data));
    };

    this.initialize();

}

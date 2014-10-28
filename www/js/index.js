var app = {
    // Application Constructor
    initialize: function() {
        var self = this;
        this.bindEvents();
        self.route();

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        }
        else {
            this.onDeviceReady();
        }
        $(window).on('hashchange', $.proxy(this.route, this));
    },
    route: function() {
        var self = this;
        var hash = window.location.hash;
        if (!hash) {
            new IndexView().render();
        }
        // var match = hash.match(this.detailsURL);
        // if (match) {
        //     this.store.findById(Number(match[1]), function(employee) {
        //         self.slidePage(new EmployeeView(employee).render());
        //     });
        // }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('bam')
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        $('.app').hide()
    }
};

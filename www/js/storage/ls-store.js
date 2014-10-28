var LocalStorageStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var items = JSON.parse(window.localStorage.getItem("items"));
        var results = items.filter(function(element) {
            var name = element.name;
            return name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, results);
    }

    this.findById = function(id, callback) {
        var items = JSON.parse(window.localStorage.getItem("items"));
        var item = null;
        var l = items.length;
        for (var i=0; i < l; i++) {
            if (items[i].id === id) {
                item = items[i];
                break;
            }
        }
        callLater(callback, item);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    var items = [
            {"id": 1,
             "name": "Azhdarcho", 
             "description": "Azhdarcho is a genus of pterodactyloid pterosaur from the late Cretaceous Period of the Bissekty Formation (middle Turonian stage, about 92 million years ago) of Uzbekistan. It is known from fragmentary remains including the distinctive, elongated neck vertebrae that characterizes members of the family Azhdarchidae, which also includes such giant pterosaurs as Quetzalcoatlus. The name Azhdarcho comes from the Persian word azhdarha, the name of a dragon in Persian mythology. The type species is Azhdarcho lancicollis. The specific epithet lancicollis is derived from the Latin words lancea (meaning 'lance' or 'spear') and collum 'neck').",
             "geography": "Uzbekistan",
             "geology": "Cretaceous",
             "family": "Azhdarchidae",
             "image1":"azhdarchos.png",
             "image2":""},
        ];

    window.localStorage.setItem("items", JSON.stringify(items));

    callLater(successCallback);

}
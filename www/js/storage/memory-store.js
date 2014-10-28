var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var employees = this.employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, employees);
    }

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
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

    this.employees = [
            {"id": 1,
             "name": "Azhdarcho",
             "description": "Azhdarcho is a genus of pterodactyloid pterosaur from the late Cretaceous Period of the Bissekty Formation (middle Turonian stage, about 92 million years ago) of Uzbekistan. It is known from fragmentary remains including the distinctive, elongated neck vertebrae that characterizes members of the family Azhdarchidae, which also includes such giant pterosaurs as Quetzalcoatlus. The name Azhdarcho comes from the Persian word azhdarha, the name of a dragon in Persian mythology. The type species is Azhdarcho lancicollis. The specific epithet lancicollis is derived from the Latin words lancea (meaning 'lance' or 'spear') and collum 'neck').",
             "geography": "Uzbekistan",
             "geology": "Cretaceous",
             "family": "Azhdarchidae",
             "image1":"azhdarchos.png",
             "image2":""}
        ];

    callLater(successCallback);

}

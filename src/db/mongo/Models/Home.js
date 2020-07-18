const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    home_id : {type : String},
    contact : {
        email : {type : String}
    },
    structure : {
        rooms : [
            {
                name : {type : String},
                devices : [
                    {
                        name : {type : String},
                        ip : {type : String},
                        topic : {type : String},
                        room : {type : String}
                    }
                ]
            }
        ]
    }
}, {collection : "homes", versionKey : false});


//============================================ HOME METHODS ==========================================
HomeSchema.statics.createHome = async function(home_id, email){
    
    var data = {
        "home_id" : home_id,
        "contact" : {
            "email" : email
        },
        "structure" : {
            "rooms" : []
        }
    }

    try {
        var home = new HomeModel(data);

        await HomeModel.create(home);

        return {
            status : "created",
            home : home
        }

    } catch (error) {
        throw {
            status : "error db"
        }
    }

}

HomeSchema.statics.findById = async function(home_id){
    try {
        var filter = {
            home_id
        }

        const home = await HomeModel.findOne(filter, {_id : 0, __v: 0});
        
        return home;
    } catch (error) {
        console.log(error);
    }
}

//============================================ ROOM METHODS ==========================================

HomeSchema.statics.createRoom = async function(home_id, name_room){
    try {
        var filter = {
            home_id
        }

        var data = {
            name :name_room,
            devices : []
        }

        const response = await HomeModel.update(filter, {$push : {"structure.rooms" : data}});
        
        return response;
    } catch (error) {
        throw error
    }
}

HomeSchema.statics.deleteRoom = async function(home_id, name_room){
    try {
        console.log(name_room)
        const response = await HomeModel.updateOne({}, 
            {$pull : {"structure.rooms" : {name : name_room}}});
        
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
}


//============================================ DEVICE METHODS ==========================================

HomeSchema.statics.createDevice = async function(home_id, name_room, info_device){
    try {
        var filter = {
            "home_id" : home_id,
            "structure.rooms.name" : name_room
        }

        const response = await HomeModel.updateOne(filter, {$push : {"structure.rooms.$.devices" : info_device}});
        
        return response;

    } catch (error) {
        throw error
    }
}


HomeSchema.statics.deleteDevice = async function(home_id, name_room, name_device){
    try {
        var filter = {
            "home_id" : home_id,
            "structure.rooms.name" : name_room
        }

        const response = await HomeModel.updateOne(filter, {$pull : {"structure.rooms.$.devices": {name : name_device}}});
        
        return response;

    } catch (error) {
        throw error
    }
}


const HomeModel = mongoose.model('HomeModel', HomeSchema);

module.exports = HomeModel;

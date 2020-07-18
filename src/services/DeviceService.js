const HomeModel = require('../db/mongo/Models/Home');

class DeviceService {
    async addDevice(home_id, name_room, info_device){
        try {
            const response = await HomeModel.createDevice(home_id, name_room, info_device);
    
            return {
                status : "created",
                response : response
            }
    
        } catch (error) {
            throw {
                status : "error db"
            }
        }
    }

    async deleteDevice(home_id, name_room, name_device){
        try {
            const response = await HomeModel.deleteDevice(home_id, name_room, name_device);
    
            return {
                status : "deleted",
                response : response
            }
    
        } catch (error) {
            console.log(error);
            throw {
                status : "error db"
            }
        }
    }
}

module.exports = new DeviceService();

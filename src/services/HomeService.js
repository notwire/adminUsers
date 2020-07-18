const HomeModel = require('../db/mongo/Models/Home');

class HomeService{
    async getHomeById(home_id){
        try {
            const home = await HomeModel.findById(home_id);

            if(home) return {
                status : true,
                home : home,
                desc : 'home found'
            };

            return {
                status : false,
                desc : 'not found'
            }    

        } catch (error) {
            return {
                status : false,
                desc : 'error db'
            }
        }
        
    }

    async createHome(home_id, email){
        try {
            const response = await HomeModel.createHome(home_id, email);

            return {
                status : true,
                response : response
            };

        } catch (error) {
            return {
                status : false,
                desc : 'error db'
            }
        }
    }
}

module.exports = new HomeService();
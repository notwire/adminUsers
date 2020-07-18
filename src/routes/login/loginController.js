const express = require('express');
const router = express.Router();

const homeService = require('../../services/HomeService');

router.post('/signin', async (req,res)=>{
    var data = req.body;

    var result = await homeService.getHomeById(data.home_id);
        
    res.json(result)
});

router.post('/register', async (req,res)=>{
    var data = req.body;

    if(data && data.home_id && data.email){
        var result = await homeService.createHome(data.home_id, data.email);
        
        res.json(result)
    }else{
        res.json({
            status : false,
            desc : 'missing params'
        });
    }
});

router.post('/logout', async (req,res)=>{
    
});




module.exports = router;

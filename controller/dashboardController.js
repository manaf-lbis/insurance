const UserData = require('../models/userDetails')


const login = (req, res) => {
    try {
        res.render('loginPage')

    } catch (error) {
        console.log(error);
    }
}

const dashboard = async (req, res) => {
    try {
        const data = await UserData.find();
        console.log(data);
        

        res.render('dashboard',{data})

    } catch (error) {
        console.log(error);

    }
}

const addNewInsurance = async (req,res)=>{
    try {
        console.log('sdfsdfas');
        
        const {name,phone,insuranceType} = req.body


        const userDate = new UserData({
            name,
            phone,
            insuranceType
        });

        await userDate.save()
        
        res.status(200).json({message:'success'})
        
 
    } catch (error) {
        console.log(error);
        
        
    }

}


const getDashboard = async (req,res) =>{
    try {
        const data = await UserData.find();
        
        res.status(200).json({data});

    } catch (error) {
        console.log(error);
    }

}



module.exports = {
    login,
    dashboard,
    addNewInsurance,
    getDashboard
}
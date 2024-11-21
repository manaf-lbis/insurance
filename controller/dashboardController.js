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

        res.render('dashboard',{data})

    } catch (error) {
        console.log(error);

    }
}

const addNewInsurance = async (req,res)=>{
    try { 
        const {name,phone,insuranceType,vehicleRegNo} = req.body

        const userDate = new UserData({
            name,
            phone,
            insuranceType,
            vehicleRegNo
        });

        await userDate.save()
        
        res.redirect('/dashboard')
        
 
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
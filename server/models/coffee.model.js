import {DataTypes} from 'sequelize';
import sequelize from './db.js';


const Coffee = sequelize.define("coffee",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,  
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false
    },

    image:{
        type:DataTypes.STRING,
        allowNull:true
    }   
})

Coffee.sync({force:false})
console.log("Coffee model synced")

export default Coffee;
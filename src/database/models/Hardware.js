module.exports = (sequelize, DataType) => {
    const colms = {
        id_hardware: {
            primaryKey:true,
            autoIncrement:true,
            type: DataType.INTEGER,
            allowNull:false,
        },
        name_hardware:{
            type: DataType.STRING(100),
            allowNull:false,
        }
    };
    const config = {
        tableName:"hardware",
        timestamps:false,
    };

    const Hardware = sequelize.define("Hardware",colms,config);

    return Hardware
}
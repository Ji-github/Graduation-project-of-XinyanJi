const Admin = require('../models/User');
const {getErr} = require('../routes/getSendResult');

const userLogin = async function (loginId) {
    const result = await Admin.findOne({
        where: {
            loginId,
        }
    })
    if(result) {
        return result.toJSON();
    }
    return null;
}

const userRegister = async function(loginId) {
    const list = await Admin.findAndCountAll()
    const data = JSON.parse(JSON.stringify(list));
    const result = data.rows.find(item => {
        return item.loginId === loginId;
    })
    if(result) {
        return null;
    } else {
    const ins = await Admin.create({loginId});
    return ins.toJSON();
    }
}



module.exports = { userLogin, userRegister };
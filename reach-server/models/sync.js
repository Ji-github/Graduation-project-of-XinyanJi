require('./Category');
require('./EventList');
require('./PowerInterface');
require('./PowerTeam');
require('./PowerUser');
require('./User');
require('./PowerList');
require('./BindUser');
require('./Business');
const sequelize = require('./db');
sequelize.sync({alter: true}).then(() => {
    console.log('同步完成');
})
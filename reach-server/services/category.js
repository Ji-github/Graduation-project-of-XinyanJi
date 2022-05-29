const Category = require('../models/Category');
const {getErr} = require('../routes/getSendResult');

const categoryInsert = async function (params) {
    const list = await Category.findAndCountAll()
    const data = JSON.parse(JSON.stringify(list));
    const result = data.rows.find(item => {
        return item.name === params.name;
    })
    if(result) {
        return getErr(`${params.name}类目存在！！！`, 500);
    } else {
        const ins = await Category.create(params);
        return ins.toJSON();
    }
}

const categoryDelete = async function(id) {
    const ins = await Category.findByPk(id);
    ins.is_delete = 1;
    ins.save();
    return ins.toJSON();
}


const categoryList = async function(params) {
    const page_num = params?.page_num || 1;
    const page_size = params?.page_size || 10;
    if(params.page_num) {
        delete params.page_num;
    }
    if(params.page_size) {
        delete params.page_size;
    }
    const {count, rows} = await Category.findAndCountAll({
        where: {
            ...params,
            is_delete: 0 || null
        },
        offset: (page_num - 1) * page_size,
        limit: +page_size
    });
    // const data = JSON.parse(JSON.stringify(rows)).filter((item) => {
    //     return !item.is_delete;
    // })
    return {
        count,
        rows
    }
}


module.exports = { categoryDelete, categoryInsert, categoryList };
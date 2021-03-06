const ObjectID = require('mongodb').ObjectId;
const getList = (db, callback) => {
 //获取文章集合
  let collection = db.collection('articles');
  //查询所有的数据
  collection.find().toArray((err, result) => {
    if(err){
      console.log('查询失败');
      return {'errorMsg':'获取信息失败'};
    }
    callback(result);
  })
}

//获取特定文章的具体的内容
const getOneArticle = (db,id,callback) => {
  let collection = db.collection('articles');
  //获取具体的数据
  collection.findOne({_id:ObjectID(id)},(err, result)=>{
    if(err){
      console.log('查询失败');
      return callback({'errorMsg':'获取信息失败'});
    }
    callback(result);
  })
}

//用于添加文章到数据库里面
const addArticle = (db, data, callback) => {
  let collection = db.collection('articles');
  //进行数据的添加
  collection.insert(data, (err, result) => {
    if(err){
      console.log(`the error ${err}`);
      return;
    }
    callback(result);
  })
}

const deleteArticle = (db, id, callback) =>{
  let collection = db.collection('articles');
  collection.remove({_id:ObjectID(id)}, (err, result) => {
    if(err){
      console.log('删除失败');
      return callback({'errorMsg':'获取信息失败'});
    }
    callback(result);
  })
}

module.exports = {
  getList:getList,
  getOneArticle:getOneArticle,
  addArticle:addArticle,
  deleteArticle:deleteArticle
};

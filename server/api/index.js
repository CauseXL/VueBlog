var User = require('../lib/mongo').User;
var Classify = require('../lib/mongo').Classify;
var Article = require('../lib/mongo').Article;

module.exports = {
  create: user => User.create(user).exec(),
  getUserByName: name => User.findOne({ name: name }).exec(),
  // 创建分类
  createClass: data => Classify.create(data).exec(),
  // 删除分类
  removeClass: classId => Classify.remove({ _id: classId }).exec(),
  // 编辑分类
  updateClass: (classId, data) => Classify.update({ _id: classId }, { $set: data }).exec(),
  // 查询所有分类
  findAllClass: () => Classify.find().addCreateAt().sort({ _id: -1 }).exec(),
  // 创建文章
  createArticle: params => Article.create(params).exec(),
  // 获取所有文章
  getAllArticles: (page, limit) => {
    if (page && limit) {
      var skip = (page - 1) * limit
      return Promise.all([
        Article.find().addCreateAt().sort({ _id: -1 }).skip(skip).limit(limit).exec(),
        Article.count().exec()
      ])
    } else {
      return Article.find().addCreateAt().sort({ _id: -1 }).exec();
    }
  },
  // 根据classify获取所有文章
  getArticlesByClassify: classify => Article.find({ classify }).addCreateAt().sort({ _id: -1 }).exec(),
  // 获取指定文章
  getOneArticle: postId => Article.findOne({ _id: postId }).addCreateAt().exec(),
  // 删除一篇文章
  removeOneArticle: postId => Article.remove({ _id: postId }).exec(),
  // 编辑一篇文章
  updateArticle: (postId, data) => Article.update({ _id: postId }, { $set: data }).exec()
  
}

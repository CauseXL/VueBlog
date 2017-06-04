var Mongolass = require('mongolass');
var mongolass = new Mongolass();
mongolass.connect('mongodb://localhost:27017/mywebsiteLearn');
var moment = require('moment');
var objectIdToTimestamp = require('objectid-to-timestamp');

// The following example calls the getTimestamp() method on an ObjectId():

// ObjectId("507c7f79bcf86cd7994f6c0e").getTimestamp()
// This will return the following output:

// ISODate("2012-10-15T21:26:17Z")

// 根据 id 生成创建时间 created_at
mongolass.plugin('addCreateAt', {
  // 只要查询所有条件，那么一定会有最终结果
  afterFind: function (results) {
    results.forEach(function (item) {
      item.created_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm');
    });
    return results;
  },
  // 单个查询有可能是null，所以要加if
  afterFindOne: function (result) {
    if (result) {
      result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm');
    }
    return result;
  }
});

//用户
exports.User = mongolass.model('User', {
  name: { type: 'string' },
  password: { type: 'string' }
})
// 创建以name键升序排列的唯一索引
exports.User.index({ name: 1 }, { unique: true }).exec();

// 分类
exports.Classify = mongolass.model('Classify',{
  classify: { type: 'string' }
})
exports.Classify.index({ _id: 1 }).exec();

// 文章
exports.Article = mongolass.model('Article',{
  classify: { type: "string" },
  title: { type: 'string' },
  content: { type: 'string' },
  contentToMark: { type: 'string' }
})
exports.Article.index({ _id: 1, classify: -1 }).exec();

function Associations(sequelize) {
  const { tip_details, user_details, likes, tip_type } = sequelize.models;
  user_details.hasMany(tip_details);
  tip_details.belongsTo(user_details);
  tip_details.hasMany(likes);
  likes.belongsTo(tip_details);
  likes.belongsTo(tip_type);
  tip_type.hasMany(likes);
  tip_details.belongsTo(tip_type);
  tip_type.hasMany(tip_details);
}
module.exports = { Associations };

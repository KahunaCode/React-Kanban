/* jshint esversion: 6 */

module.exports = function(sequelize, DataTypes) {
  var Cards = sequelize.define("Cards", {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    priority: DataTypes.STRING,
    status: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    assignedTo: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models){
      }
    }
  });

  return Cards;
};
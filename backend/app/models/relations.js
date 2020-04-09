// Relations entre user et activity / user, activity, et tag

// Import
const Activity = require('./activity');
const Tag = require('./tag');
const User = require('./user');

// user <> activity

User.belongsToMany(Activity, {
    as: 'activities',
    through: 'activities_have_users',
    foreignKey: 'user_id',
    otherKey: 'activity_id'
});

Activity.belongsToMany(User, {
    as: 'users',
    through: 'activities_have_users',
    foreignKey: 'activity_id',
    otherKey: 'user_id'
});

// activity <> tag

Activity.belongsToMany(Tag, {
    as: 'tags',
    through: 'activities_have_tags',
    foreignKey: 'activity_id',
    otherKey: 'tag_id'
});

Tag.belongsToMany(Activity, {
    as: 'tags_activity',
    through: 'activities_have_tags',
    foreignKey: 'tag_id',
    otherKey: 'activity_id'
});

// user <> tag

User.belongsToMany(Tag, {
    as: 'user_tags',
    through: 'users_have_tags',
    foreignKey: 'user_id',
    otherKey: 'tag_id'
});

Tag.belongsToMany(User, {
    as: 'tag_users',
    through: 'users_have_tags',
    foreignKey: 'tag_id',
    otherKey: 'user_id'
});

// author <> activity

Activity.belongsTo(User, {
    foreignKey: "user_id",
    as: "author"
  });
  
User.hasMany(Activity, {
    foreignKey: "user_id",
    as: "activities_user"
});



// Export
module.exports = { Activity, Tag, User };
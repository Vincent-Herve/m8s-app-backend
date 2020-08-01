// Import
const { Tag, Activity, User } = require('../models/relations');

// TagController
const TagController = {
    // route : GET /tag
    getAllTags: async (req, res) => {
        try {
            let tags = await Tag.findAll({
                // Tag > user, Tag > Activity
                include: [{
                    association: 'tag_users',
                    attributes: ['username']
                },
                {
                    association: 'tags_activity'
                }],
                order: [
                    ['name']
                ],
            });

            res.json(tags);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // route : POST /tag/:id/activity
    associateTagToActivity: async (req, res) => {
        try {
            const activityId = req.params.id;
            const tagId = req.body.tagId;

            const bodyErrors = [];
            if (!tagId) {
                bodyErrors.push(`the tagId parameter is missing`);
            }

            if (bodyErrors.length) {
                // si la requête ne contient pas toutes les infos demandées
                res.status(500).json(bodyErrors);
            } else {
                let activity = await Activity.findByPk(activityId, {
                    include: ['tags']
                });

                if (!activity) {
                    res.status(404).json(`Can't find activity with the id ${activityId}`);
                } else {
                    const tag = await Tag.findByPk(tagId);

                    if (!tag) {
                        res.status(404).json(`Can't find a tag with the id ${tagId}`);
                    } else {
                        await activity.addTag(tag);
                        activity.tags.push(tag);

                        res.json('Tag associé avec succès');
                    }
                }
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // route : DELETE /tag/:tag_id/activity/:activity_id
    deleteTagFromActivity: async (req, res) => {
        try {
            const activityId = req.params.activity_id;
            const tagId = req.params.tag_id;

            const activity = await Activity.findByPk(activityId);

            if (!activity) {
                res.status(404).json(`Can't find activity with the id ${activityId}`);
            } else {        
                const tag = await Tag.findByPk(tagId);

                if (!tag) {
                    res.status(404).json(`Can't find a tag with the id ${tagId}`);
                } else {
                    await activity.removeTag(tag);

                    res.json('Tag supprimé avec succès');
                }
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

// Export
module.exports = TagController;
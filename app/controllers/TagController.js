// Import
const { Tag, Activity, User } = require('../models/relations');

// TagController
const TagController = {
    // route : GET /api/tag
    getAllTags: async (request, response) => {
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
            response.json(tags);
        } catch (error) {
            console.error(error);
            response.status(500).json(error);
        }
    },
    // route : POST /api/activity/:id/tag
    associateTagToActivity: async (request, response) => {
        try {
            const activityId = request.params.id;
            const tagId = request.body.tagId;

            const bodyErrors = [];
            if (!tagId) {
                bodyErrors.push(`the tagId parameter is missing`);
            }

            if (bodyErrors.length) {
                // si la requête ne contient pas toutes les infos demandées
                response.status(500).json(bodyErrors);
            } else {

                let activity = await Activity.findByPk(activityId, {
                    include: ['tags']
                });

                if (!activity) {
                    response.status(404).json(`Cant find activity with the id ${activityId}`);
                } else {
                    const tag = await Tag.findByPk(tagId);

                    if (!tag) {
                        response.status(404).json(`Cant find a tag with the id ${tagId}`);
                    } else {

                        await activity.addTag(tag);

                        activity.tags.push(tag);

                        response.json('Tag associé avec succès');
                    }
                }
            }
        } catch (error) {
            response.status(500).json(error);
        }
    },
    // route : DELETE /activity/:activity_id/tag/:tag_id
    deleteTagFromActivity: async (request, response) => {
        try {
            const activityId = request.params.activity_id;
            const tagId = request.params.tag_id;

            const activity = await Activity.findByPk(activityId);

            if (!activity) {
                response.status(404).json(`Cant find activity with the id ${activityId}`);
            } else {
                
                const tag = await Tag.findByPk(tagId);

                if (!tag) {
                    response.status(404).json(`Cant find a tag with the id ${tagId}`);
                } else {

                    await activity.removeTag(tag);

                    response.json('Tag supprimé avec succès');
                }
            }
        } catch (error) {
            response.status(500).json(error);
        }
    }
};

// Export
module.exports = TagController;
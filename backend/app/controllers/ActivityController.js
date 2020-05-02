// Import
const { Activity, Tag, User } = require('../models/relations');
const { Op } = require("sequelize");

// ActivityController
const ActivityController = {
    // route: GET /activity
    getAllActivities: async (request, response) => {
        try {
            let activities = await Activity.findAll({
                // Activity > user ==> tag, Activity > Tag
                include: [{
                    association: 'users',
                    attributes: ['id', 'username'],
                    include: ['user_tags']
                },
                {
                    association: 'tags'
                },
                {
                    association: 'author',
                    attributes: { exclude: ['password'] }
                }],
                order: [
                     ['date', 'DESC']
                ],
            });
            response.json(activities);
        } catch (error) {
            console.error(error);
            response.status(500).json(error);
        }
    },
    // route : GET /activity/:id
    getActivity: async (request, response) => {
        try {
            const activityId = request.params.id;
            // On récupère une seule activité
            let activity = await Activity.findByPk(activityId);
            if (activity) {
                response.json(activity);
            } else {
                // pas d'activité pour cet id
                response.status(404).json(`Cant find activity with this id : ${activityId}`);
            }
        } catch (error) {
            console.error(error);
            response.status(500).json(error);
        }
    },
    // route : POST /activity
    createActivity: async (request, response) => {
        try {
            const {title, description, free_place, location, date, hour, tagId, userId} = request.body;
            
            // Contrôle des champs de création d'activité
            const bodyErrors = [];
            if (!title) {
                bodyErrors.push('title parameter is missing');
            }

            if (!description) {
                bodyErrors.push('description parameter is missing');
            }

            if (!free_place) {
                bodyErrors.push('free_place parameter is missing');
            }

            if (!location) {
                bodyErrors.push('location parameter is missing');
            }

            if (!date) {
                bodyErrors.push('date parameter is missing');
            }

            if (!hour) {
                bodyErrors.push('hour parameter is missing');
            }

            if (!tagId) {
                bodyErrors.push('tagId parameter is missing');
            }

            if (!userId) {
                bodyErrors.push('userId parameter is missing');
            }

            // S'il y'a au moins une erreur
            if (bodyErrors.length) {
                response.status(400).json(bodyErrors);

            } else {
                const tag = await Tag.findByPk(tagId);
                if (!tag) {
                    response.status(404).json(`Cant find a tag with the id ${tagId}`);
                }

                const user = await User.findByPk(userId);
                if (!user) {
                    response.status(404).json(`Cant find a user with the id ${userId}`);
                }

                    const newActivity = new Activity();
                    newActivity.title = title;
                    newActivity.description = description;
                    newActivity.free_place = free_place;
                    newActivity.location = location;
                    newActivity.date = date;
                    newActivity.hour = hour;
                    // L'utilisateur devient auteur de l'activité 
                    newActivity.user_id = userId;
                    
                    await newActivity.save();

                    // Ajout d'un tag
                    await newActivity.addTag(tag);
                    // L'auteur de l'activité est directement ajouté à cette dernière à sa création
                    await newActivity.addUser(user);

                    response.json(newActivity);
                }
        } catch (error) {
            response.status(500).json(error);
        }
    },
    // route : PATCH /activity/:id
    editActivity: async (request, response) => {
        try {
            const activityId = request.params.id;

            // On récupère l'activité associé à l'id de la requête, puis on l'a modifie
            let activity = await Activity.findByPk(activityId);
            if (!activity) {
                // pas d'activité pour cet id
                response.status(404).json(`Cant find activity with this id : ${activityId}`);
            } else {
                const {title, description, free_place, location, date, hour, tagId, currentTag} = request.body;

                if (title) {
                    activity.title = title;
                }

                if (description) {
                    activity.description = description;
                }

                if (free_place) {
                    activity.free_place = free_place;
                }

                if (location) {
                    activity.location = location;
                }

                if (date) {
                    activity.date = date;
                }

                if (hour) {
                    activity.hour = hour;
                }
                // On sauvegarde la modification dans la base de données
                await activity.save();

                // Suppression de l'ancien tag et ajout du nouveau en cas de modification
                await activity.removeTag(currentTag);
                await activity.addTag(tagId);

                response.json(activity);
            }
        } catch (error) {
            console.error(error);
            response.status(500).json(error);
        }
    },
    // route : POST /activity/search
    searchActivity: async (request, response) => {
        try {
            // Recherche d'activité par tag ou location, ou les deux.
            const {tag, location} = request.body;
            console.log('tag ==>',tag,'location==>', location);
            // On récupère d'abord toute les activités
            let activities = await Activity.findAll({
                where: {
                    location: {
                        [Op.iLike]: `%${location}%`
                    }
                },
                include: [{
                    association: 'users',
                    attributes: ['id', 'username'],
                    include: ['user_tags']
                },
                {
                    association: 'tags',
                    where: {
                        name: {
                            [Op.iLike]: `%${tag}%`
                        }           
                    }
                },
                {
                    association: 'author',
                    attributes: { exclude: ['password'] }
                }],
                order: [
                    ['created_at'],
                ],
            });

            const mappedActivities = activities.map((activity) => (
                activity.dataValues
            ));
            return response.json(activities);
                 
        } catch (error) {
            response.status(500).json(error);
        }
    },
    // route : POST /activity/:id/user
    associateUserToActivity: async (request, response) => {
        try {
            const activityId = request.params.id;
            const userId = request.body.userId;

            const bodyErrors = [];
            if (!userId) {
                bodyErrors.push(`the userId parameter is missing`);
            }

            if (bodyErrors.length) {
                // si la requête ne contient pas toutes les infos demandées
                response.status(500).json(bodyErrors);
            } else {

                let activity = await Activity.findByPk(activityId);

                if (!activity) {
                    response.status(404).json(`Cant find activity with the id ${activityId}`);
                } else {
                    const user = await User.findByPk(userId);

                    if (!user) {
                        response.status(404).json(`Cant find a user with the id ${userId}`);
                    } else {
                        await activity.addUser(user);
                        response.json('OK');
                    }
                }
            }
        } catch (error) {
            response.status(500).json(error);
        }
    },
     // route : DELETE /activity/:id
     deleteActivity: async (request, response) => {
        try {
            const activityId = request.params.id;
            // On récupère l'activité associé à l'id de la requête, puis on l'a supprime
            let activity = await Activity.findByPk(activityId);
            await activity.destroy();
            
            response.json('OK');
        } catch (error) {
            response.status(500).send(error);
        }
    },
    // route : DELETE /activity/:activity_id/user/:user_id
    deleteUserFromActivity: async (request, response) => {
        try {
            const activityId = request.params.activity_id;
            const userId = request.params.user_id;

            const activity = await Activity.findByPk(activityId);

            if (!activity) {
                response.status(404).json(`Cant find activity with the id ${activityId}`);
            } else {
                
                const user = await User.findByPk(userId);

                if (!user) {
                    response.status(404).json(`Cant find a user with the id ${userId}`);
                } else {

                    await activity.removeUser(user);

                    response.json('Utilisateur supprimé avec succès');
                }
            }
        } catch (error) {
            response.status(500).json(error);
        }
    }
};

// Export
module.exports = ActivityController;
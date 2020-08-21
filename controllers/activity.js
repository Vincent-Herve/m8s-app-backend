// Import
const { Activity, Tag, User } = require('../models/relations');
const { Op } = require("sequelize");

// ActivityController
const ActivityController = {
    // route: GET /activity
    getAllActivities: async (req, res) => {
        try {
            const activities = await Activity.findAll({
                // Activity > user ==> tag, Activity > Tag
                include: [{
                    association: 'users',
                    attributes: ['id', 'username'],
                    include: ['user_tags']
                },
                {
                    association: 'tags'
                }],
                order: [
                     ['created_at', 'DESC']
                ],
            });

            res.json(activities);

        } catch (error) {
            res.status(500).json(error);
        }
    },
    // route : POST /activity
    createActivity: async (req, res) => {
        try {
            const {title, description, free_place, location, date, hour, tagId, userId} = req.body;
            
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
                res.status(400).json(bodyErrors);

            } else {
                const tag = await Tag.findByPk(tagId);
                if (!tag) {
                    res.status(404).json(`Can't find a tag with the id ${tagId}`);
                }

                const user = await User.findByPk(userId);
                if (!user) {
                    res.status(404).json(`Can't find a user with the id ${userId}`);
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

                    res.json(newActivity);
                }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // route : PATCH /activity/:id
    editActivity: async (req, res) => {
        try {
            const activityId = req.params.id;

            // On récupère l'activité associé à l'id de la requête, puis on l'a modifie
            let activity = await Activity.findByPk(activityId);
            if (!activity) {
                // pas d'activité pour cet id
                res.status(404).json(`Can't find activity with this id : ${activityId}`);
            } else {
                const {title, description, free_place, location, date, hour, tagId, currentTag} = req.body;

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

                res.json('OK');
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    // route : POST /activity/:id/user
    associateUserToActivity: async (req, res) => {
        try {
            const activityId = req.params.id;
            const userId = req.body.userId;

            const bodyErrors = [];
            if (!userId) {
                bodyErrors.push(`the userId parameter is missing`);
            }

            if (bodyErrors.length) {
                // si la requête ne contient pas toutes les infos demandées
                res.status(400).json(bodyErrors);
            } else {

                let activity = await Activity.findByPk(activityId);

                if (!activity) {
                    res.status(404).json(`Can't find activity with the id ${activityId}`);
                } else {
                    const user = await User.findByPk(userId);
                    if (!user) {
                        res.status(404).json(`Can't find a user with the id ${userId}`);
                    } else {
                        await activity.addUser(user);
                        res.json('OK');
                    }
                }
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
     // route : DELETE /activity/:id
     deleteActivity: async (req, res) => {
        try {
            const activityId = req.params.id;
            // On récupère l'activité associé à l'id de la requête, puis on l'a supprime
            let activity = await Activity.findByPk(activityId);
            await activity.destroy();
            
            res.json('OK');
        } catch (error) {
            res.status(500).send(error);
        }
    },
    // route : DELETE /activity/:activity_id/user/:user_id
    deleteUserFromActivity: async (req, res) => {
        try {
            const activityId = req.params.activity_id;
            const userId = req.params.user_id;

            const activity = await Activity.findByPk(activityId);

            if (!activity) {
                res.status(404).json(`Can't find activity with the id ${activityId}`);
            } else {
                
                const user = await User.findByPk(userId);

                if (!user) {
                    res.status(404).json(`Can't find a user with the id ${userId}`);
                } else {
                    await activity.removeUser(user);

                    res.json('Utilisateur supprimé avec succès');
                }
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    closeFinishedActivity: async (req, res, next) => {
        try {
            const activities = await Activity.findAll({
                where: {
                    date: {
                        [Op.lt]: Date.now()
                    }
                }
            }); 

            for (let activity of activities) {
                await activity.destroy();
            }
            
            next();
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

// Export
module.exports = ActivityController;
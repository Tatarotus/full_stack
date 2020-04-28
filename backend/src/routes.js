const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

routes.post(
    "/session",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string()
                .required()
                .length(8)
        })
    }),
    SessionController.create
);

routes.get("/ongs", OngController.index);
routes.post(
    "/ongs",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string()
                .required()
                .min(2),
            email: Joi.string()
                .required()
                .email(),
            whatsapp: Joi.string()
                .required()
                .min(10)
                .max(11),
            city: Joi.string()
                .required()
                .min(3),
            uf: Joi.string()
                .required()
                .length(2)
        })
    }),
    OngController.create
);

routes.get(
    "/profile",
    celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string()
                .required()
                .length(8)
        }).unknown(),

        [Segments.QUERY]: {
            page: Joi.number().default(1)
        }
    }),
    ProfileController.index
);

routes.post(
    "/incidents",
    celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string()
                .required()
                .length(8)
        }).unknown(),
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string()
                .required()
                .min(4),
            description: Joi.string()
                .required()
                .min(4),
            value: Joi.number()
                .integer()
                .required()
                .min(10)
        })
    }),
    IncidentController.create
);
routes.get("/incidents", IncidentController.index);
routes.delete(
    "/incidents/:id",
    celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string()
                .required()
                .length(8)
        }).unknown(),
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number()
                .integer()
                .required()
        })
    }),
    IncidentController.delete
);

module.exports = routes;

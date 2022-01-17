const sequelize = require('../database');

module.exports = sessionRepository = {
    
    getById : async function(sessionId) {

        let session = await sequelize.models.game_sessions.findByPk(sessionId);
        

        return session;

    },
    
    getAllSessions : async function() {

         let sessions = await sequelize.models.game_sessions.findAll();

         return sessions;
    },

    addSession : async function(instance) {

        return await sequelize.models.game_sessions.create(instance);
        
    },

    updateSession : async function(sessionId, newdata) {

        return await sequelize.models.game_sessions.update(newdata, {where : { id : sessionId}});
    },

    deleteSession : async function(sessionId) {

        let session = await this.getById(sessionId);

        let deletedSession = sequelize.models.game_sessions.build(session);

        session.destroy();

        return deletedSession;
    },
    
   

}
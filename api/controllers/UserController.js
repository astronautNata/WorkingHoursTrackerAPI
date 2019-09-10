var User = require('../models/User.js');

module.exports = {
    registerUser: async (userObj) => {
        const user = new User(userObj);
        await user.save();
        const token = await user.generateAuthToken();
        return { user, token };
    },

    loginUser: async (email, password) => {
        const user = await User.findByCredentials(email, password);
        if (!user) {
            return null;
        }
        const token = await user.generateAuthToken();
        return { user, token };
    }
}
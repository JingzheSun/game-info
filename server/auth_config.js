module.exports = {
    'twitterAuth' : {
        'consumerKey'      : 'fphtzKSjvC8T0FhDoPm4aHNCO',
        'consumerSecret'  : 'KjWwDTmImp5pkphrT0wfHKOXcX1ALjTOfUWXpZgbpQg7o25hrS',
        //'callbackURL'   : 'https://fcc-vote-appjs.herokuapp.com/login/callback'
        'callbackURL'   : 'http://localhost:5000/auth/twitter/callback'
    },

    'facebookAuth' : {
        'clientID'       : '1785821271462984',
        'clientSecret'    : '1d0255eac9f9616e44e140fedfc1779b',
        'callbackURL'       : 'http://localhost:5000/auth/facebook/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }
};
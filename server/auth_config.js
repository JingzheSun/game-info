module.exports = {
    'twitterAuth' : {
        'consumerKey'      : 'kA12FE9Pta2vyaQMBJ9pleWBk',
        'consumerSecret'  : 'gxf9dKvpAPZ4A9ZtJNEl0WFf3sCb5cM4bh6CcW4ujC9VYLmdWc',
        //'callbackURL'   : 'https://gaminginfo.herokuapp.com/auth/twitter/callback'
        //'callbackURL'   : 'http://localhost:5000/auth/twitter/callback'
        'callbackURL'   : 'http://gameinfo.sunjingzhe.com/auth/twitter/callback'
    },

    'facebookAuth' : {
        'clientID'       : '1785821271462984',
        'clientSecret'    : '1d0255eac9f9616e44e140fedfc1779b',
        //'callbackURL'   : 'https://gaminginfo.herokuapp.com/auth/facebook/callback'
        //'callbackURL'       : 'http://localhost:5000/auth/facebook/callback'
        'callbackURL'   : 'http://gameinfo.sunjingzhe.com/auth/facebook/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }
};
module.exports = {

  login: function(req,res,next){
    for(let i = 0; i < users.length; i++){
      if(users[i].name === req.body.name && users[i].password === req.body.password){
        req.session.currentUser = users[i];
        return res.send({userFound : true});
      }
    }
    res.send({userFound : false});
  }
};

const users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

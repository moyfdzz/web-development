let passport = require('passport');
let bcrypt = require('bcrypt');

let password = 'secret';
let username = 'alfredo';

// Register
bcrypt.hash(password, 10)
    .then(hasspassword => {
        return UserList.create({username, password: hashpassword})
            .then(user => {
                return user;
            })
    });

// Login
let passParam = 'secret';
let username = 'alfredo';

return Users.find({username})
    .then(user => {
        let hashpassword = user.password;
        
        return bcrypt.compare(passParam, hashpassword);
    })
    .then(ok => {
        if(ok)
            return user;
        else
            throw Error(_);
    });
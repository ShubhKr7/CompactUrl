const sessionIdtoMapUser = new Map();

function setUser(id, user){
    return sessionIdtoMapUser.set(id, user);
}

function getUser(id){
    return sessionIdtoMapUser.get(id);
}

module.exports={
    setUser, getUser
}
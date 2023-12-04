const jk = require('./jokes')

const getajoke = ()=> {
    index = Math.floor(Math.random() * (jk.jokes.length))
    return jk.jokes[index]
}

exports.getajoke = getajoke
module.exports = ((env) => {
    const enviroment = env.dev ? 'development' : 'production'
    return require(`./webpack.${enviroment}.js`)
})
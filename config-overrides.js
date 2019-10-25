module.exports = function override(config, env) {
	config.plugins=config.plugins || []
	const chalk = require("chalk")
	const PreloadPlugin = require('preload-webpack-plugin')
	//config.plugins = config.plugins.concat([new PreloadPlugin({})])
	config.plugins = config.plugins.concat([
		new require("progress-bar-webpack-plugin")({ format: ` [:current/:total] :percent :elapsed seconds [${chalk.green.bold(":bar")}] :msg `, clear:true })
	])
	return config;
}


// Módulo do Nodejs, com recursos de gestão de rotas.
const path = require('path');

module.exports = {

	// Como o Webpack irá compilar o código-fonte. 
	// Production: Código perfomatico.
	// Development: Código aberto e comentádo.
	mode: 'production',

	// Responsável por capturar o(s) arquivo(s) de desenvolvimento.
	entry: './src/index.js',

	// Responsável por gerar o resultado do(s) arquivo(s) compilados.
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	// Responsável por processar e gerar diversos tipos de arquivos.
	// Exemplo: estilos, imagens, fontes, scripts, etc.
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}

};
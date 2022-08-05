
// Métodos do Gulp para gestão da automatização.
const { src, dest, watch, series } = require('gulp');
// Plugin do Gulp para utilização do Babel.
const babel = require('gulp-babel');
// Plugin do Gulp para minificar o código Javascript.
const uglify = require('gulp-uglify');
// Plugin do Gulp para compilar arquivo Sass.
const sass = require('gulp-sass')(require('sass'));


function compilarCodigoJavascript() {
    
    // src() captura o(s) arquivo(s).
    // pipe() recebe os métodos e executa em sequência.
    return src('src/*.js')
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(uglify())
        .pipe(dest('dist/'));

    /* 

        No fim o que esta acontecendo...

        1. Capturo qualquer arquivo com extensão .js
        src('src/*.js')
        
        2. Em seguida executo a função babel para compilar
        o código javascript.
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))

        3. Capturo o código javascript e o minifico.
        .pipe(uglify())

        4. Por último envio o arquivo compilado para pasta
        public/
        .pipe(dest('public/'));

    */
} 

function compilarEstilosSass() {
    return src('./src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('dist/'));

    /* 

        No fim o que esta acontecendo...

        1. Capturo qualquer arquivo com extensão .scss
        
        2. Compilo o código Sass e comprimo o resultado para CSS
        .pipe(sass({ outputStyle: 'compressed' }))

        3. Por último envio o arquivo compilado para pasta
        public/

    */
}

function acompanharDesenvolvimentoDoCodigoFonte() {
    // Observa os arquivos Javascript.
    watch('src/*js', compilarCodigoJavascript);
    // Observa os arquivos Sass.
    watch('./src/scss/**/*.scss', compilarEstilosSass);
}

exports.compilacao = series(
    compilarCodigoJavascript, 
    compilarEstilosSass
);

exports.desenvolvimento = series(
    compilarCodigoJavascript, 
    compilarEstilosSass,
    acompanharDesenvolvimentoDoCodigoFonte
);

/*

    Documentação dos pacotes

    gulp-uglify 
    https://www.npmjs.com/package/uglify-js

    gulp-babel
    https://www.npmjs.com/package/gulp-babel

    gulp-sass
    https://www.npmjs.com/package/gulp-sass
    
*/
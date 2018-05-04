const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject({
    "typeRoots": [
        "./node_modules/@types",
        // "./j4ts",
        "./typescript"
    ],
    "rootDirs": ".",
    "compilerOptions": {
        "module": "amd",
        "moduleResolution": "node",
        "noImplicitAny": false,
        "target": "es6",
        "lib": ["es5", "es6", "dom"]
    }
});
gulp.task('j4ts-scripts', function(){
    gulp.src(['./j4ts/**/*.ts'])
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
});
gulp.task('scripts', function(){
    gulp.src(['./typescript/**/*.ts'])
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
});
gulp.task('watch', ['scripts'], function() {
    gulp.watch('typescript/**/*.ts', ['scripts']);
});
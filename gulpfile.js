/* welcome to task runner gulp (my helper)
 [1] create json file => npm init
 [2] create gulpfile.js 
 [3] setup any plugin => npm i (plguin name) --save -dev
 [4] reqiure any gulp is lioad
 [5] 7aded elpoth bta3 el file ely htshta5el 3leha => gulp.src()
 [6] 7aded elpoth bta3 el file hatro7 3laeh => gulp.dest()
 [7] famous plugin {
     - concat => concat more file in one file = > .pipe(concate('name file'))
     - prefix => for css files prefixes => .pipe(prefix('last 5 version'))
     - compile sass => for compile sass file to css => .pipe(sass({output-style}))
     - compile pu => for complie pug to html => .pipe(pug({prety}))
     - local server => to create server => create file name (server.js)
     - watch => to watch file 
     - live relode => to relode live => .pipe(livereload()) and ivereload.listen() in watch task
     - sourcemaps => to map file in inspect chrome use 2code 
        * [1] => .pipe(sourcemaps.init()) after srcfile
        * [2] => .pipe(sourcemaps.write(".")) before dest src
     - uglify => to comprese js file =>.pipe(uglify())
     - notify => turn on notif in my windows after finsh task .pipe(notify("my massge after finsh"))
     - zip => to compres my file but we need to make alone task .pipe(zip('myname.zip'))
     - ftp => to up my website to hostdomain to client
 [8] if iam not need to make file task him but is src in my file to gulp.src(['src all file'],['!src file its not need him'])
 }
*/
var gulp = require("gulp"),
    concat = require("gulp-concat"),
    autoprefix = require("gulp-autoprefixer"),
    sass = require("gulp-sass"),
    pug = require("gulp-pug"),
    livereload = require("gulp-livereload"),
    sourcemaps = require("gulp-sourcemaps"),
    uglify = require("gulp-uglifyes"),
    minify = require("gulp-minify"),
    notify = require("gulp-notify"),
    zip = require("gulp-zip"),
    ftp = require("vinyl-ftp"),
    terser = require("gulp-terser"),
    imagemin = require("gulp-imagemin");

// html task
gulp.task("html", function() {
    return gulp
        .src("stage/Html/*.pug")
        .pipe(
            pug({
                pretty: true,
            })
        )
        .pipe(gulp.dest("dist"))
        .pipe(notify("task html is done"))
        .pipe(livereload());
});

//css task
gulp.task("css", function() {
    return gulp
        .src(["stage/Css/**/*.css", "stage/Css/**/*.scss"])
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: "compressed",
            }).on("error", sass.logError)
        )
        .pipe(autoprefix())
        .pipe(concat("main.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist/css"))
        .pipe(notify("task css is done"))
        .pipe(livereload());
});

// js task

gulp.task("js", function() {
    return gulp
        .src("stage/Js/**/*.js")
        .pipe(concat("main.js"))
        .pipe(minify())
        .pipe(uglify())
        .pipe(terser())
        .pipe(gulp.dest("dist/Js"))
        .pipe(notify("task js is done"))
        .pipe(livereload());
});

//zip file
gulp.task("zip", function() {
    return gulp
        .src("./dist/**/*.*")
        .pipe(zip("mywork.zip"))
        .pipe(gulp.dest("."))
        .pipe(notify("file has been zip"));
});
gulp.task("deploy", function() {
    var conn = ftp.create({
        host: "files.000webhost.com",
        user: "jemy-galery",
        password: "midogamal",
        parallel: 10,
    });

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp
        .src(["dist/**/*.*"], { base: ".", buffer: false })
        .pipe(conn.newer("/public_html")) // only upload newer files
        .pipe(conn.dest("/public_html"))
        .pipe(livereload());
});

// image min
gulp.task("imageComprese", function() {
    return gulp
        .src("stage/imgs/**/*.*")
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
                }),
            ])
        )
        .pipe(gulp.dest("dist/imgs"));
});
//watch task
gulp.task("watch", function() {
    require("./server.js");
    gulp.watch("connect");
    livereload.listen();
    gulp.watch("stage/Html/**/*.pug", gulp.series("html"));
    gulp.watch(["stage/Css/**/*.css", "stage/Css/**/*.scss"], gulp.series("css"));
    gulp.watch("stage/Js/*.js", gulp.series("js"));
    gulp.watch("stage/imgs/**/*.*", gulp.series("imageComprese"));
    //gulp.watch('./dist/**/*.*', gulp.series('zip'));
    gulp.watch("./dist/**/*.*", gulp.series("deploy"));
});

// deafult task
//gulp.task('default', ['watch']);
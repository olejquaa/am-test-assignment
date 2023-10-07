import fileInclude from "gulp-file-include";
import { plugins } from "../config/plugins.js";

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(plugins.replace(/@img\//g, "img/"))
    .pipe(app.gulp.dest(app.path.build.html));
};

// Импорты
import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

// Задачи
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";

// Глобальная переменнаяs
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Наблюдаем за изменениями файлов в src
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html, scss, js);

// Режим разработчика
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));

// Стандартный сценарий при запуске
gulp.task("default", dev);

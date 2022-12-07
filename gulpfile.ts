import { dest, src } from "gulp";

export async function defaultTask() {
  src("src/*.js").pipe(dest("build/"));
}
export function clean(cb: any) {
  console.log("clean");
  cb();
}

export default defaultTask;

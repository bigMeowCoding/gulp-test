export function defaultTask(cb: any) {
  console.log("default task");
  cb();
}
export function clean(cb: any) {
  console.log("clean");
  cb();
}

export default defaultTask;

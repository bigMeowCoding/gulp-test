function defaultTask(cb) {
  console.log("default task");
  cb();
}

exports.default = defaultTask;

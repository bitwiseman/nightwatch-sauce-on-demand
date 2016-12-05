exports.command = function (done) {
  var DSP = this.page.DSP();

  DSP.navigate().section.login.signIn();
  this.pause(20000);
  done();
};

var Q = require('q');

module.exports = {
  '@disabled': false,
  beforeEach: function (client, done) {
    client.login(done);
  },

  'CampaignSmoke': function (client) {
    var DSP = client.page.DSP();
    var AdvertiserPage = client.page.AdvertiserPage();

    DSP.getAdvertiserPageByName('native test advertiser');
    AdvertiserPage.createNewCampaign();
  },

  afterEach: function (client, done) {
    client.sauceReportBack(done);
  }
};

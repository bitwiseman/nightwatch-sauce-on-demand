module.exports = {
  //TODO: create URL pattern so it can be used by .navigate() method of this page
  url: '',
  elements: {
    newCampaignLink: {
      selector: 'a[href*="/campaigns/new"]'
    }
  },
  commands: [{
    createNewCampaign: function () {
      return this.waitForElementVisible('@newCampaignLink', 5000)
        .click('@newCampaignLink')
        .waitForElementNotPresent('@newCampaignLink', 1000);
    }
  }]
};

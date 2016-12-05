module.exports = {
  url: function () {
    return this.api.launch_url.replace(/\/$/, "");
  },
  sections: {
    login: {
      selector: '#mbr-login-box',
      elements: {
        userName: {
          selector: 'input#login-username'
        },
        password: {
          selector: 'input#login-passwd'
        },
        submitButton: {
          selector: 'button#login-signin'
        }
      },
      commands: [{
        signIn: function () {
          this.api.pause(1000);
          return this.waitForElementVisible('@userName', 1000)
            .setValue('@userName', process.env.DSP_USERNAME)
            .click('@submitButton')
            .waitForElementVisible('@password', 1000)
            .setValue('@password', process.env.DSP_PASSWORD)
            .click('@submitButton')
            .waitForElementNotPresent('@submitButton', 1000);
        }
      }]
    },

    header: {
      selector: 'header#main-header',
      elements: {
        searchField: {
          selector: 'input.form-control'
        },
        searchResults: {
          selector: '.search-result-container > .search-results'
        },
        searchResult: {
          selector: '.search-result-container > .search-results .search-results a'
        },
        submit: {
          selector: 'i.icon-search'
        }
      },
      commands: []
    }
  },
  commands: [{
    getAdvertiserPageByName: function (advertiserName) {
      this.section.header
        .setValue('@searchField', advertiserName)
        .click('@searchField')
        .expect.element('@searchResults').to.be.visible.before(10000);

      this.section.header.click('@searchResult');
    }
  }]
};

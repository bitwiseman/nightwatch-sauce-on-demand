#!groovy
node {
    stage ("Build") {
        checkout scm

        sh "npm install"
    }

    stage ("Test") {
        sauce('f0a6b8ad-ce30-4cba-bf9a-95afbc470a8a') {
            sauceconnect(options: '', useGeneratedTunnelIdentifier: false, verboseLogging: false) {
                def platforms = [
                    'firefox_os_x',
                    'chrome_os_x'
                ].join(',')

                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    sh "./node_modules/.bin/nightwatch -e ${platforms} || true"
                }

                junit 'reports/**'

                step([$class: 'SauceOnDemandTestPublisher'])
            }
        }
    }
}

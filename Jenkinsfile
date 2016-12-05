#!groovy
node {
    stage ("Build") {
        checkout scm

        sh "npm install"
    }

    stage ("Test") {
        sauce('628965b1-c7fb-489c-a112-c5e9d1ba4121') {
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

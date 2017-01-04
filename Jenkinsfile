#!groovy
node {
    stage ("Build") {
        checkout scm
    }

    stage ("Test") {

        sh '''
        mkdir reports
        cp CHROME*.xml reports/
        '''
        step([$class: 'XUnitBuilder', testTimeMargin: '3000', thresholdMode: 1, thresholds: [[$class: 'FailedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '', unstableThreshold: ''], [$class: 'SkippedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '', unstableThreshold: '']], tools: [[$class: 'JUnitType', deleteOutputFiles: false, failIfNotNew: false, pattern: 'reports/*.xml', skipNoTestFiles: false, stopProcessingIfError: true]]])

    }
}

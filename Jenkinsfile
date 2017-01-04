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
        step([$class: 'XUnitBuilder', testTimeMargin: '3000', thresholdMode: 1, thresholds: [[$class: 'FailedThreshold', failureNewThreshold: '', failureThreshold: '', unstableNewThreshold: '', unstableThreshold: ''], [$class: 'SkippedThreshold', failureNewThreshold: '', failureThreshold: '2', unstableNewThreshold: '', unstableThreshold: '1']], tools: [[$class: 'JUnitType', deleteOutputFiles: false, failIfNotNew: false, pattern: 'reports/*.xml', skipNoTestFiles: false, stopProcessingIfError: false]]])

    }
}

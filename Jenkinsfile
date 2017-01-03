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
        junit 'reports/*.xml'

    }
}

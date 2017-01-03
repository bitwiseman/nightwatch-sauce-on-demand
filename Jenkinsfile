#!groovy
node {
    stage ("Build") {
        checkout scm

        sh "npm install"
    }

    stage ("Test") {

        sh '''
        cp CHROME*.xml reports/
        '''
        junit 'reports/*.xml'

    }
}

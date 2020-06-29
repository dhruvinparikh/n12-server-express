pipeline {
    agent any
    stages {
        stage('Yarn Install') {
            steps {
                sh 'yarn install --prefer-offline'
            }
        }
        stage('Test & Coverage') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Lint'){
            steps {
                sh 'yarn lint'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn run build'
            }
        }
    }
    post {
        success {
            googlechatnotification url: 'https://chat.googleapis.com/v1/spaces/AAAAam5K4I8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=fp7DgbprwcGsLHgXggLmLfAim38AWkitkPXmSs1LdIQ%3D', message: '${JOB_NAME} is ${BUILD_STATUS} by ${CHANGE_AUTHOR} [ SUCCESS ]', sameThreadNotification: true
        }
            failure {
            googlechatnotification url: 'https://chat.googleapis.com/v1/spaces/AAAAam5K4I8/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=fp7DgbprwcGsLHgXggLmLfAim38AWkitkPXmSs1LdIQ%3D', message: '${JOB_NAME} is ${BUILD_STATUS} by ${CHANGE_AUTHOR} [ FAIL ] ', sameThreadNotification: true

        }

    }
}
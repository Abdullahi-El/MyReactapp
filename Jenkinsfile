pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy to IIS') {
            steps {
                bat '''
                xcopy dist C:\\inetpub\\wwwroot /E /I /Y
                '''
            }
        }
    }
}

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

        stage('Deploy to GitHub Pages') {
            steps {
                bat '''
                git config --global user.name "Abdullahi-El"
                git config --global user.email "Abdallamodric@hotmail.com"
                npm run deploy
                '''
            }
        }
    }
}

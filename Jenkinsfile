pipeline {
    agent any

    tools {
        nodejs 'node26'
    }

    environment {
        AWS_REGION = 'ap-south-1'
        ECR_REPO = '739754704384.dkr.ecr.ap-south-1.amazonaws.com/aws/demo'
        IMAGE_TAG = 'v2'
    }

    stages {
        stage("Clone Repository") {
            steps {
                git branch: 'main', url: 'https://github.com/CloudNexora/todo.git'
            }
        }

        stage('Verify Node.js Installation') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'npm test'
            }
        }
    }
}
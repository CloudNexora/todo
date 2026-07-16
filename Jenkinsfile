pipeline {
    agent any

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

        stage("Build") {
            steps {
                sh 'echo "Building the project..."'
                sh 'node app.js'
            }
        }
    }
}
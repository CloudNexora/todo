pipeline {
    agent any

    stages {
        stage("Clone Repository") {
            steps {
                git branch: 'main', url: 'https://github.com/CloudNexora/todo.git'
            }
        }
    }
}
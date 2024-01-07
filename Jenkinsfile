pipeline{
    agent any
    stages{
        stage('message'){
            steps{
                echo 'hello world!'
            }
        }
        stage('build'){
            bat "npm install"
        }
    }
}
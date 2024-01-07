pipeline{
    agent any
    stages{
        stage('message'){
            steps{
                echo 'hello world!'
            }
        }
        stage('build'){
            steps{
                bat "npm install"
            }
            
        }
    }
}
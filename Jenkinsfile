pipeline{
    agent any
     environment {
        NEXUS_VERSION = "nexus3"
        NEXUS_PROTOCOL = "http"
        NEXUS_URL = "127.0.0.1:8081"
        NEXUS_REPOSITORY = "checkpoin-cicd"
        ANGULAR_PROJECT_PATH ="${WORKSPACE}"
        NEXUS_CREDENTIAL_ID = "nexusCredential"
        ARTIFACT_VERSION = "${BUILD_NUMBER}"
    }
    stages{
        stage('message'){
            steps{
                echo 'hello world!'
            }
        }
        stage('build'){
            steps{
                bat "npm install"
                bat "ng build"
            }
            
        }
        stage('archivage artefact sur nexus'){
            steps{
                nexusArtifactUploader(
                        nexusVersion: NEXUS_VERSION,
                        protocol: NEXUS_PROTOCOL,
                        nexusUrl: NEXUS_URL,
                        groupId: "com.example",  // Update with your Angular project's groupId
                        version: ARTIFACT_VERSION,
                        repository: NEXUS_REPOSITORY,
                        credentialsId: NEXUS_CREDENTIAL_ID,
                        artifacts: [
                            [
                                artifactId: "angular-app",  // Update with your Angular project's artifactId
                                classifier: '',
                                file: "${ANGULAR_PROJECT_PATH}/dist/angular-app/*",  // Update with your Angular project's artifact path
                                type: 'tar.gz'
                            ]
                        ]
                    )
                }
            }

        
    }
}
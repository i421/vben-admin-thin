pipeline{
    agent any

    environment{
        project_workspace='/var/www/html/vben'
    }

    stages{
        stage("node package"){
             steps{
                sh '/usr/local/node/bin/yarn install'
                sh '/usr/local/node/bin/npm run build'
            }
        }

        stage("copy file"){
             steps{
                sh 'sudo mv dist ${project_workspace}'
            }
        }
    }
}

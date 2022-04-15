pipeline{
    agent any

    environment{
        project_workspace='/var/www/test/vben'
    }

    parameters{
    }

    stages{
        stage("node package"){
             steps{
                sh '/usr/local/node/bin/yarn install'
                sh '/usr/local/node/bin/npm run build'
            }
        }

        stage("zip file"){
             steps{
                sh 'sudo zip -r dist.zip dist'
                sh 'sudo mv dist.zip ${project_workspace}'
                sh 'sudo unzip -o ${project_workspace}/dist.zip -d ${project_workspace}'
            }
        }
    }
}

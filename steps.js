step1
Genrate ssh key of ec2 isntance add it to gitlab.

step2
install gitlab runner.

step3
Register runner with url and auth key and execute it with shell.

step4
Give root permission to gitlab runner
sudo su
visudo
add this:- 
gitlab-runner ALL=(ALL) NOPASSWD: ALL

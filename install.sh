#!/bin/bash

#
# Welcome to this awesome install script
#

exec_cmd() {
    echo "+ $1"
    bash -c "$1"
}

install_nodejs() {
    exec_cmd 'curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -'
    exec_cmd 'sudo apt install -y build-essential nodejs'
}

install_npm() {
    exec_cmd 'sudo apt install -y npm'
}

install_lazaro() {
    exec_cmd 'wget -0 https://github.com/obernardovieira/Lazaro.git'
    exec_cmd 'cd Lazaro && sudo npm install'
    exec_cmd 'sudo npm install -g .'
    exec_cmd 'cd .. && rm -r Lazaro'
}

install_nodejs()
install_npm()
install_lazaro()
#!/bin/bash

#
# Welcome to this awesome install script
#

exec_cmd() {
    echo "+ $1"
    bash -c "$1"
}

install_software() {
    exec_cmd 'sudo apt install -y build-essential git nodejs npm'
}

install_lazaro() {
    exec_cmd 'mkdir -p /home/$USER/.lazaro/app'
    exec_cmd 'git clone https://github.com/obernardovieira/Lazaro.git /home/$USER/.lazaro/app'
    exec_cmd 'sudo npm --prefix /home/$USER/.lazaro/app install'
    exec_cmd 'sudo npm install -g /home/$USER/.lazaro/app'
}

install_software
install_lazaro
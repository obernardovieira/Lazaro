#!/bin/bash

#
# Welcome to this awesome install script
#

exec_cmd() {
    echo "+ $1"
    bash -c "$1"
}

install_software() {
    exec_cmd 'sudo apt install -y build-essential git nodejs'
}

install_lazaro() {
    app_dir = '/home/$USER/.lazaro/app'
    exec_cmd 'mkdir -p $app_dir'
    exec_cmd 'git clone https://github.com/obernardovieira/Lazaro.git $app_dir'
    exec_cmd 'sudo npm --prefix $app_dir install'
    exec_cmd 'sudo npm install -g $app_dir'
}

install_software
install_lazaro
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
    exec_cmd 'git clone https://github.com/obernardovieira/Lazaro.git Lazaro'
    exec_cmd 'cd Lazaro'
    exec_cmd 'sudo npm install'
    exec_cmd 'sudo npm install -g .'
    exec_cmd 'cd ..'
    exec_cmd 'rm -rf Lazaro'
}

install_software
install_lazaro
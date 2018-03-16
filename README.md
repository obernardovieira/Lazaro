# Lazaro
Lazaro is a command line application that lets you choose and connect a given list of servers.<br>
Maybe you had this problem before, maybe not, but when you have a list of servers and you don't know all the ip's, you don't want to set alias to all of them, also you use tmux and you want to start more than one connection in the same window and see all of them at once. How you gonna do it? Lazaro ...<br><br>
![lazaro-terminal](lazaro.gif)

## Who may find this useful
Everyone that has a big list of servers and prefer to have a command line app to help select a server instead of look for the ip everytime that wants to connect.

## How it works
This is a simples nodejs app using [inquirer][inquirer-url] and [exec-sh][exec-sh-url]. With inquirer it's possible to make questions and have a list has an option. Then, with exec-sh, an ssh connection is run.

## Install
Easy as :tada:
```bash
$ curl -sL https://raw.githubusercontent.com/obernardovieira/Lazaro/master/install.sh | sudo -E bash -
```

## Uninstall
It's not recommended but you can do it :crying_cat_face: 
```bash
$ sudo npm uninstall -g lazaro
```

## Usage
To run this, you simply need to do the following command form anywhere on your computer.
```bash
$ lazaro
```
It's also possible to see the full commands list with (under development)
```bash
$ lazaro --help
```
The `add` option:
- [ ] TODO

The `remove` option:
- [ ] TODO

The `edit` option:
- [ ] TODO

# Contributing

Your contributions are always welcome! Please have a look at the [contribution guidelines](CONTRIBUTING.md) first. :tada:

# License

The GNU General Public License v3.0 only - [obernardovieira](https://github.com/obernardovieira/). Please have a look at the [LICENSE.md](LICENSE.md) for more details.


[inquirer-url]: (url)
[exec-sh-url]: (url)

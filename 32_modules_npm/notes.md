Exploring Modules & The NPM Universe

**Crucial!**
Module.Exports
Requring Modules
Using NPM
Installing Packages
Creating Package.json files
*Important*
*Nice To Have*
The Dad Jokes Package
Rainbow Package
The Figlet Package
Franc Package
NPM (Node Package Manager)

## Module.Exports##
  must require the file to use the function
  and link module.exports to the function to make it work 
    exports. also works but cannot use exports as a variable then

Besides requring a file, we can also requre directories

## NPM (Node Package Manager) ##
  a library of many packages published by other developers that we can use for free

  a command line tool to easily install and manage those packages in our Node Projects

How to Install NPMS

  npm install (or i) <packageName>
    npm i colors
  require the package
    const colors = require("colors")
  
  npm install -g <packageName> 
    will install globally

  npm init will create the package.json 
    (meta data for your project)
  when uploading code we dont share the node_module

  before running the node index.js after copying other repos
  must install dependices by doing npm install, and it will install all of them(node_modules) automatically
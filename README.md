# E-Cart

E-Cart is a simple and efficient e-commerce, build in Node.JS, React and MongoDB.
With a easy customization and a simple dashboard for your controller.

## Requirements

For development, you will need Node.JS, React, a node global package and a MongoDB.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

 the installation was successful, you should be able to run the following command.

    $ node --version
    v10.16.2

    $ npm --version
    6.9.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
    
## MongoDB

Open the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), create your database, go to Clusters, connect and Connect with Mongo Shell and save the link
    
## Install

    $ git clone https://github.com/lpeil/E-Cart
    $ cd E-Cart
    $ npm install
    
## Configuration

Go in your project to /server and open the file ".env". Past the mongo link after "DATABASE=".
Change the PORT if you want, and create your secret key.
    
## Running the project

    $ npm start

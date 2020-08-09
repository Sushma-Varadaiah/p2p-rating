# Peer to Peer Rating Dapp.

## Folder structure
Folder structure is as follows -

contracts - folder contains all smart contract solidity files.

migrations - folder contains all migration files to migrate smart contracts to blockchain.

public - folder contains the initial html page and images folder(has user images). 

src - folder contains the main Dapp implementation.

truffle-config.js - file contains the details of the blockchain network which the application has to connect to.

## Process followed

Develop and test your smart contract on remix online IDE. Copy the smart contract solidity file to contracts folder.

Create a migration script file for the solidity smart contract.

truffle-config.js - Change the IP and port of the blockchain network. Current file is pointed to a local Ganache instance.

Open Ganache and copy the address of the account to the users.json (users.json - contains the address and profile picture of the user).


## Compiling Deploying the smart contract on Blockchain network

Here Ganache is used as a Blockchain network and truffle suite to compile and deploy the application.

Command to compile and deploy the smart contracts to Ganache network.

> truffle compile

> truffle deploy

This should create the contract creation transactions which is visible in Ganache console. You can also see the address where the smart contract is deployed.

Copy the address and paste in rating.js file.
ex: const contractAddress = '0x47C9d63c87EdE1867ED88595364E4B68dBf7BB97'

The above process creates the Rating.json file. Copy that and paste it inside network folder.

> npm install - will install all the dependencies

> npm start - To start the application.

This will open up the application in the browser.

In the browser install Metamask chrome extension and connect to the Ganache network using Custom RPC option.

Once metamask is connected to your test-ganache network import an account from Ganache. Connect the account. 

Once you are connected you will be initialiting transaction from that particular account through metamask to Ganache blockchain network.

The page will display all the accounts that you have mentioned in the users.json. 

Click on any number from 1-5 displayed and click rate. This will initiate the transaction and it will open up metamask for transaction confirmation. Confirm the transaction. After the transaction confirmation you should see the transaction details in Ganache. 

Click on GetRate - to get the ratings of a user.

## Next steps -

Improve the UI by giving more flexible options to see whether a particular user has rated another particular user or not. (Tested in remix).

On change of the metamask account seemlessly show the changed user page for that particular account.

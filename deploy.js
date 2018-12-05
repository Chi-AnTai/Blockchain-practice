const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');
const key = 'blade biology silver wheat glue nuclear ensure market snow axis pause ship';

const provider = new HDWalletProvider(
    key,
    'https://rinkeby.infura.io/v3/884e9e22d8dc4dfd83da003b0667f6bb'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('attemping to deploy from account',accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytecode, arguments: ['Hi there!']})
        .send({gas:'1000000', from: accounts[0]});

    console.log('contract deploy to ',result.options.address)
};

deploy();
const GAME = {

    abi: [

        {

            "inputs": [],

            "stateMutability": "nonpayable",

            "type": "constructor"

        },

        {

            "inputs": [

                {

                    "internalType": "address",

                    "name": "newowner",

                    "type": "address"

                }

            ],

            "name": "ChangeOwner",

            "outputs": [],

            "stateMutability": "nonpayable",

            "type": "function"

        },

        {

            "inputs": [],

            "name": "deposit",

            "outputs": [],

            "stateMutability": "payable",

            "type": "function"

        },

        {

            "inputs": [

                {

                    "internalType": "address payable",

                    "name": "sendadress",

                    "type": "address"

                },

                {

                    "internalType": "uint256",

                    "name": "randomsonuc",

                    "type": "uint256"

                }

            ],

            "name": "gameplay",

            "outputs": [

                {

                    "internalType": "bool",

                    "name": "Final",

                    "type": "bool"

                }

            ],

            "stateMutability": "payable",

            "type": "function"

        },

        {

            "inputs": [],

            "name": "getowner",

            "outputs": [

                {

                    "internalType": "address",

                    "name": "OWNER",

                    "type": "address"

                }

            ],

            "stateMutability": "view",

            "type": "function"

        },

        {

            "inputs": [],

            "name": "playerbalance",

            "outputs": [

                {

                    "internalType": "uint256",

                    "name": "TOTAL",

                    "type": "uint256"

                }

            ],

            "stateMutability": "view",

            "type": "function"

        },

        {

            "inputs": [],

            "name": "totalhaves",

            "outputs": [

                {

                    "internalType": "uint256",

                    "name": "TOTAL",

                    "type": "uint256"

                }

            ],

            "stateMutability": "view",

            "type": "function"

        },

        {

            "inputs": [

                {

                    "internalType": "address payable",

                    "name": "sendadress",

                    "type": "address"

                },

                {

                    "internalType": "uint256",

                    "name": "amount",

                    "type": "uint256"

                }

            ],

            "name": "withdraw",

            "outputs": [],

            "stateMutability": "nonpayable",

            "type": "function"

        }

    ]



}









const BINANCE = {

    chainid: 56,

    contrat: "0xfaf9868A4FDF528D957A5f714CFfF51032c651fb",

    tokenname: "BNB"

}



const POLYGON = {

    chainid: 137,

    contrat: "0x1eFd5f6Dd39841AA3B9ae8C6506b0F8eFB11E320",

    tokenname: "MATIC"

}



const AVAX = {

    chainid: 43114,

    contrat: "0xB54b6d34C77E73f111a846afb64f88588106D14D",

    tokenname: "AVAX"

}

export const MY_CONTRACT_ADDRESS = "0x4ec21ebec73bee0fef1d276fb366f560e3d361d3d71417c680fb1db08792e6c3";

export const MY_CONTRACT_ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_value",
				"type": "string"
			}
		],
		"name": "setValue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBoth",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_number",
				"type": "int256"
			}
		],
		"name": "setNumber",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
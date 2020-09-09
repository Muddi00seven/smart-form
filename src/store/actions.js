// Actions to be usedwith Reducers
export const setTokenBalance = (amount)=> {
    return {
        type: 'SET_TOKEN_BALANCE',
        payload: amount
    };
}

export const issueSmartLc = (transaction)=> {
    return {
        type: 'ISSUE_SMARTLC',
        payload: transaction
    };
}

export const setbuyerLC = (transaction)=> {
    return {
        type: 'SET_Buyer_LC',
        payload: transaction
    };
}
    export const setorginAgentLC = (transaction)=> {
        return {
            type: 'SET_OriginAgent_LC',
            payload: transaction
        };
    }
        export const setDestinationAgentLC = (transaction)=> {
            return {
                type: 'SET_DestinationAgent_LC',
                payload: transaction
            };
}
export const setupWeb3 = (web3) => {
    return {
        type: 'SETUP_WEB3',
        payload: web3
    };
}

export const setupContract = (contract) => {
    return {
        type: 'SETUP_CONTRACT',
        payload: contract
    };
}

export const setupToken = (tokenContract) => {
    return {
        type: 'SETUP_TOKEN',
        payload: tokenContract
    };
}
export const setResult = (arg) => {
    return {
        type: 'SET_RESULT',
        result: arg
    };
}
export const addEthereumAccounts = (accounts) => {
    return {
        type: 'ADD_ETHEREUM_ACCOUNTS',
        payload: accounts
    };
}

export const web3LoadingError = (errorMessage) => {
    return {
        type: 'WEB3_LOADING_ERROR',
        errorMessage: errorMessage
    };
}
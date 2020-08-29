export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      

        case 'SET_Buyer_LC':
          return {
            ...state,
            buyersLC: action.payload
          }

          case 'SET_OriginAgent_LC':
            return {
              ...state,
              originAgentLC: action.payload
            }
        case 'SET_DestinationAgent_LC':
        return {
          ...state,
          destinationAgentLC: action.payload
        }
      case 'SETUP_WEB3':
        return {
          ...state,
          web3: action.payload,
          web3LoadingErrorMessage: "",
          web3Loadded: true
        }
      case 'SETUP_CONTRACT':
        return {
          ...state,
          lcContract: action.payload
        }
        case 'SETUP_TOKEN':
        return {
          ...state,
          tokenContract: action.payload
        }
        case 'SET_TOKEN_BALANCE':
        return {
          ...state,
          yenix: action.payload
        }
      case 'ADD_ETHEREUM_ACCOUNTS':
        return {
          ...state,
          accounts: action.payload
        }
      case 'WEB3_LOADING_ERROR':
        return {
          ...state,
          web3LoadingErrorMessage: action.errorMessage,
          web3Loadded: false
        }
      default:
        return state;
    }
    
  }
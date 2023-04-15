import holderReducer from "./holderReducer";
import { legacy_createStore as createStore} from 'redux'
const store = createStore(holderReducer);

export default store;

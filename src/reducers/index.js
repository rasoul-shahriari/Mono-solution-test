import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";

import switchLanguageReducer from './reducer_switch_language';

const rootReducer = combineReducers({
    SelectedLanguage: switchLanguageReducer,
    form: formReducer,
});

export default rootReducer;

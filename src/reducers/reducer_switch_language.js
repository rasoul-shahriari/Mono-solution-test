import {SWITCH_LANGUAGE} from '../actions';
import {getData} from '../components/api';

const SetLocalStorage = (language) => {
    if(language !== undefined ) {
        localStorage.setItem('defaultLanguage', language);
    }
}

export default function (state = getData(localStorage.getItem('defaultLanguage') || 'en') , action) {
    SetLocalStorage(action.language);

    switch (action.type) {
    case SWITCH_LANGUAGE:
        return getData(action.language)
	  };
	  return state;
}

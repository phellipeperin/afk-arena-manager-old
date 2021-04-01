import { combineReducers } from 'redux';

import friend from './friend/reducer';
import hero from './hero/reducer';
import user from './user/reducer';

export default combineReducers({
    friend,
    hero,
    user,
});

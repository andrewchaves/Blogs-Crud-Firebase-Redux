import {combineReducers} from 'redux'

import BlogReducer from './blogReducer'
import LoadingReducer from './loadingReducer'

const rootReducer = combineReducers({
    blogsList: BlogReducer,
    loadingReducer: LoadingReducer
})

export default rootReducer
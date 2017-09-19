// reducer 输入 输出 是完全可预测
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'

function todo(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case TOGGLE_TODO:
            if( state.id !== action.id) {
                return false
            }
            // Object.assign (target, ...source)
            // copy/merge source to target
            return Object.assign({}, state, {
                completed: !state.completed
            })
        default:
            return state
    }
}

function todos(state, action) {
    switch (action.type) {
        case ADD_TODO:
             // adding the new todoItem to the list
             // it is new so its state is undefined
            return [
                ...state,
                todo(undefined, action)
                ]
        case TOGGLE_TODO:
            return state.map(stateItem => todo(stateItem,action))
        default:
            return state
    }
}

export default todos
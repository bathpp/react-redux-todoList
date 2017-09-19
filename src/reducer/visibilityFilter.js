import { VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

export default function visibilityFilter(state=SHOW_ALL, action) {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.visibilityFilter()
        default:
            return state
    }
}

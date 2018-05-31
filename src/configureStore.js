import { createStore } from 'redux'
import reducer from './store'

export default function configureStore() {
    return createStore(reducer)
}
const TRANSFORM_VALUE_LOAD = 'TRANSFORM_VALUE_LOAD'
const TRANSFORM_VALUE_SUCCESS = 'TRANSFORM_VALUE_SUCCESS'
const TRANSFORM_VALUE_ERROR = 'TRANSFORM_VALUE_ERROR'

const LOWERCASE_ENDPOINT = '/api/lowercase'
const UPPERCASE_ENDPOINT = '/api/uppercase'

const UPPERCASE = 'uppercase'
const LOWERCASE = 'lowercase'

function transformText(input, mode = LOWERCASE) {
    mode = mode.toLowerCase()

    // Remove this once the below lines are implemented
    return { type: 'TRANSFORM_TEXT', payload: 'placeholder-message' }

    if (mode === LOWERCASE) {
        // Make XHR call to lowercase endpoint and return
    } else if (mode === UPPERCASE) {
        // Make XHR call to uppercase endpoint and return
    }
    // If no mode match, respond with error from client-side
}

export const transformToLowerCase = input => transformText(input)
export const transformToUpperCase = input => transformText(input, UPPERCASE)

const initialState = {
    transformedValue: '',
    isLoading: false,
    error: null
}

export default function textTransform(state = initialState, { type, payload }) {
    switch (type) {
        case TRANSFORM_VALUE_LOAD:
            return { ...state, isLoading: true, transformedValue: '' }
        case TRANSFORM_VALUE_SUCCESS:
            return { ...state, isLoading: false, value: '', transformedValue: payload.output }
        case TRANSFORM_VALUE_ERROR:
            return { ...state, isLoading: false, error: payload.message }
        default: return state
    }
}
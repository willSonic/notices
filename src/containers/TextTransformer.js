import { connect } from 'react-redux'
import TextTransformer from '../components/TextTransformer'
import { transformToLowerCase, transformToUpperCase } from '../store/textTransform'

export default connect(null, { transformToLowerCase, transformToUpperCase })(TextTransformer)
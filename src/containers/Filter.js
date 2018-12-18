import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterActions from '../actions/filter'
import Filter from '../components/Filter'

const mapStateToProps = ({books}) => ({
  filterBy: books.items
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterActions, dispatch)
  // setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
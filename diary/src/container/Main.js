import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Main extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {

   const {addItem, diaryItems} =this.props
    return (
      <div className="grid-container">
        <div className="diary-app">
            <h1>Diary</h1>
            <diaryForm addItem={(item) =>addItem(item)}/>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  diaryItems: state.diaryItems
})

const mapDispatchToProps = (dispatch) =>({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

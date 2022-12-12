import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { connect } from "react-redux";
import diaryForm from "../components/diaryForm";
import {addItem} from "../redux/actions";
import diaryItem from "../components/diaryItem";

export class Main extends Component {
    //   static propTypes = {
    //     prop: PropTypes
    //   }

    render() {

        const { addItem, diaryItems } = this.props
        return (
            <div className="grid-container">
                <div className="diary-app">
                    <h1>Diary</h1>
                    <diaryForm addItem={(item) => addItem(item)} />

                </div>
                <div className="diary-app">
                    {diaryItems.length > 0 ? (diaryItems.map((item) => {
                        <diaryItem/>
                    })

                    )
                        : (
                            <h1>No Items</h1>
                        )}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    diaryItems: state.diaryItems
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

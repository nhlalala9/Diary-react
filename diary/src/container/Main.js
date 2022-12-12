import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { connect } from "react-redux";
import DiaryForm from "../components/DiaryForm";
import { addItem } from "../redux/actions";
import DiaryItem from "../components/DiaryItem";

export class Main extends Component {
    constructor(){
        super();
        this.state = {
           show: false
        };
    }

    render() {

        const { addItem, diaryItems } = this.props
        return (
            <div>
                <div className="grid-container">
                    <div className="diary-app" style={{ paddingTop: "20px" }}>
                        <h1>Diary</h1>
                        <DiaryForm addItem={(item) => addItem(item)} />

                    </div>
                    <div className="diary-app">
                        {diaryItems.length > 0 ? (diaryItems.map((item) => {
                            return (
                                <DiaryItem item={item} />
                            )
                        })

                        )
                            : (
                                <h1>No Items</h1>
                            )}

                    </div>
                    <Modal
                        size="lg"
                        show={show}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Large Modal
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>...</Modal.Body>
                    </Modal>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    diaryItems: state.diaryItems
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

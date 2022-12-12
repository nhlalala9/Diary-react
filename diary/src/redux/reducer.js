import { ADD_ITEM } from "./actions"

const initialState = {
    diaryItems: []

}

const diaryReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_ITEM:
            let id = 1
            if (state.diaryItems.length > 0) {
                id = state.diaryItems[0].id + 1
            }
            let item = { id: id, title: actions.payload.title, date: actions.payload.date, text: actions.payload.text }
            return {
                ...state,
                diaryItems: [item, ...state.diaryItems]
            }
        default: return state;
    }

}

export default diaryReducer
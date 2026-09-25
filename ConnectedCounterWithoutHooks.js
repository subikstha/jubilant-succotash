import { connect } from "react-redux";
import { Counter } from "./CounterWithoutHook";
import { setTitle } from "./actions";

const mapStateToProps = (state) => {
    return {
        count: state.count,
        title: state.title
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     setProjectTitle: (title) => dispatch(setTitle(title))
// })

const mapDispatchToProps = ({
    setProjectTitle: (title) => setTitle(title)
})

export const CounterWithoutHooksContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)
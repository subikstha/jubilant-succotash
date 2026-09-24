import { connect } from "react-redux";
import { Counter } from "./CounterWithoutHook";

const mapStateToProps = (state) => {
    return {
        count: state.count,
        title: state.title
    }
}

export const CounterWithoutHooksContainer = connect(mapStateToProps)(Counter)
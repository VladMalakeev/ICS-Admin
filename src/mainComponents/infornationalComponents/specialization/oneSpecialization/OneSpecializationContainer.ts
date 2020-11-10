import {connect} from "react-redux";
import {OneSpecializationComponent} from "./OneSpecializationComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const OneSpecializationContainer = connect(MapStateToProps, MapDispatchToProps)(OneSpecializationComponent);
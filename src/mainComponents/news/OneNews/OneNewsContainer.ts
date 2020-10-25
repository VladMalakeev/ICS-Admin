import {connect} from "react-redux";
import {OneNewsComponent} from "./OneNewsComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const OneNewsContainer = connect(MapStateToProps, MapDispatchToProps)(OneNewsComponent);
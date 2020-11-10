import {connect} from "react-redux";
import {OneLecturerComponent} from "./OneLecturerComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const OneLecturerContainer = connect(MapStateToProps, MapDispatchToProps)(OneLecturerComponent);
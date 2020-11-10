import {connect} from "react-redux";
import {OneDepartmentComponent} from "./OneDepartmentComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const OneDepartmentContainer = connect(MapStateToProps, MapDispatchToProps)(OneDepartmentComponent);
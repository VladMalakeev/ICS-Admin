import {connect} from "react-redux";
import {DepartmentsListComponent} from "./DepartmentsListComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const DepartmentsListContainer = connect(MapStateToProps, MapDispatchToProps)(DepartmentsListComponent);
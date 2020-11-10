import {connect} from "react-redux";
import {LecturersListComponent} from "./LecturersListComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const LecturersListContainer = connect(MapStateToProps, MapDispatchToProps)(LecturersListComponent);
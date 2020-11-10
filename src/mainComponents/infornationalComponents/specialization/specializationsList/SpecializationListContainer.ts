import {connect} from "react-redux";
import {SpecializationListComponent} from "./SpecializationListComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const SpecializationListContainer = connect(MapStateToProps, MapDispatchToProps)(SpecializationListComponent);
import {connect} from "react-redux";
import {SpecialtyListComponent} from "./SpecialtyListComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const SpecialtyListContainer = connect(MapStateToProps, MapDispatchToProps)(SpecialtyListComponent);
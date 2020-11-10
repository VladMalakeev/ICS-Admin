import {connect} from "react-redux";
import {DegreesComponent} from "./DegreesComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const DegreesContainer = connect(MapStateToProps, MapDispatchToProps)(DegreesComponent);
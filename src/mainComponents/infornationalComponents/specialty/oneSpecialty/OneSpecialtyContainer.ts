import {connect} from "react-redux";
import {OneSpecialtyComponent} from "./OneSpecialtyComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const OneSpecialtyContainer = connect(MapStateToProps, MapDispatchToProps)(OneSpecialtyComponent);
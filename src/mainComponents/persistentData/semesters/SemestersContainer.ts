import {connect} from "react-redux";
import {SemestersComponent} from "./SemestersComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const SemestersContainer = connect(MapStateToProps, MapDispatchToProps)(SemestersComponent);
import {connect} from "react-redux";
import {CoursesComponent} from "./CoursesComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const CoursesContainer = connect(MapStateToProps, MapDispatchToProps)(CoursesComponent);
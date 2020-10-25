import {connect} from "react-redux";
import {SiteBarComponent} from "./SiteBarComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const SiteBar = connect(MapStateToProps, MapDispatchToProps)(SiteBarComponent);
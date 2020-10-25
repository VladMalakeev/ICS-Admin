import {connect} from "react-redux";
import {FooterComponent} from "./FooterComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const Footer = connect(MapStateToProps, MapDispatchToProps)(FooterComponent);
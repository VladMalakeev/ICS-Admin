import {connect} from "react-redux";
import {HeaderComponent} from "./HeaderComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const Header = connect(MapStateToProps, MapDispatchToProps)(HeaderComponent);
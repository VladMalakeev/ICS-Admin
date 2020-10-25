import {connect} from "react-redux";
import {NewsListComponent} from "./NewsListComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const NewsListContainer = connect(MapStateToProps, MapDispatchToProps)(NewsListComponent);
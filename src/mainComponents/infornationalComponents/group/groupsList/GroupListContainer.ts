import {connect} from "react-redux";
import {GroupsListComponent} from "./GroupListComponent";

let MapStateToProps = (state:any) => {
    return {}
};

let MapDispatchToProps = (dispatch:any) => {
    return {}
};

export const GroupsListContainer = connect(MapStateToProps, MapDispatchToProps)(GroupsListComponent);
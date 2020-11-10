import React, {FC} from "react";

export const SplitRouterComponent:FC<any> = (props) => {
  if(props.match.params.id) {
      return <props.one/>
  }
  else {
      return <props.list/>
  }
}
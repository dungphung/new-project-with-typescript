import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export function connectAutoDispatch(mapStateToProps: any, actions: any) {
  return connect(
    mapStateToProps,
    (dispatch: any) => bindActionCreators(actions, dispatch),
    null,
    {}
  );
}

export function connectAutoDispatchWithRef(mapStateToProps: any, actions: any) {
  return connect(
    mapStateToProps,
    dispatch => bindActionCreators(actions, dispatch),
    null,
    {
      withRef: true
    }
  );
}

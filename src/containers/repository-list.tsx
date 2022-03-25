import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { RepositoryList } from "../pages/repository-list";

import { ApplicationState } from "../store";
import * as RepositoriesActions from "../store/ducks/repositories/actions";

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(RepositoriesActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);

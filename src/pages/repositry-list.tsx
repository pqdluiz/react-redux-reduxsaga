import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Repository } from "../store/ducks/repositories/types";
import { ApplicationState } from "../store";

import * as RepositoriesActions from "../store/ducks/repositories/actions";
import { RepositoryItem } from "../components/repository-item";

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

export const RepositoryList: React.FC<Props> = (props) => {
  useEffect(() => {
    const { loadRequest } = props;

    loadRequest();
  }, []);

  const { repositories } = props;

  return (
    <ul>
      {repositories &&
        repositories.map((repository, index) => (
          <RepositoryItem key={index} repository={repository} />
        ))}
    </ul>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(RepositoriesActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);

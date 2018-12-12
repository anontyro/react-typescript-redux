import Test from './component';
import * as actions from '../../../store/test/actions';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export function mapStateToProps({enthusiasm}: any) {
  return {
    enthusiasmLevel: enthusiasm.enthusiasmLevel,
    name: enthusiasm.languageName,
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);

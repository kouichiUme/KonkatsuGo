// src/containers/GpsData.js
import { connect } from 'react-redux';
import GpsData from '../components/GpsData';
import * as actions from '../actions/GpsData';

// Reducerを定義後に実装します
const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.userId
});

const mapDispatchToProps = dispatch => ({
  // onMountとonUpdateをfetchGpsDataを接続
  onMount(userId) {
    dispatch(actions.fetchGpsData(userId));
  },
  onUpdate(userId) {
    dispatch(actions.fetchGpsData(userId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GpsData);

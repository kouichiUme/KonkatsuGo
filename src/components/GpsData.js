// src/components/GpsData.js
import React from 'react';
import PropTypes from 'prop-types';

// ライフサイクルメソッドを使うのでclassに変更
export default class GpsData extends React.Component {
  // componentWillMount, componentWillReceivePropsを追加
  componentWillMount() {
    this.props.onMount(this.props.userId);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      // props.userIdに変化があるので、ページ遷移が発生している
      this.props.onUpdate(nextProps.userId);
    }
  }

  render() {
    return (
      <div>
        <h2>GpsDataコンポーネント</h2>
        <p>ユーザID: {this.props.userId}</p>
      </div>
    );
  }
}
GpsData.propTypes = {
  userId: PropTypes.string,
  // onMount, onUpdateを追加
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};
GpsData.defaultProps = {
  userId: '1'
};


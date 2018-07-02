import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';

const URL = './gpsdata';

// リクエスト開始
const startRequest = userId => ({
    type: 'START_REQUEST',
    payload: { userId },
});
// レスポンス受信
const receiveData = (userId, error, response) => ({
    type: 'RECEIVE_DATA',
    payload: { userId, error, response },
});
// リクエスト完了
const finishRequest = userId => ({
    type: 'FINISH_REQUEST',
    payload: { userId },
});

// Gpsデータを取得する
export const fetchGpsData = userId => {
    // redux-thunkを使った非同期処理
    return async dispatch => {
        dispatch(startRequest(userId));

        const queryString = qs.stringify({
            userId: userId,
        });

        try {
            const responce = await fetchJsonp(`${URL}?${queryString}`);
            const data = await responce.json();
            dispatch(receiveData(userId, null, data));
        } catch (err) {
            dispatch(receiveData(userId, err));
        }
        dispatch(finishRequest(userId));
    };
};
export const TEST_SAGA = 'TEST_SAGA';
export const testSaga = (text = '') => {
  return {
    type: TEST_SAGA,
    payload: text,
  };
};

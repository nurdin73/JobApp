import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {testSaga} from '../../redux/test/actions';

function TestScreen({test, testing}) {
  React.useEffect(() => {
    testing('abasdasd');
  }, []);
  console.log(test);
  return (
    <View>
      <Text>tes</Text>
    </View>
  );
}

const mapStateToProps = ({TestReducer}) => {
  return {
    test: TestReducer,
  };
};

export default connect(mapStateToProps, {
  testing: testSaga,
})(TestScreen);
// export default TestScreen;

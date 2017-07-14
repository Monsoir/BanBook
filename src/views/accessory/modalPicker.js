import React, {
  PureComponent,
} from 'react';

import {
  Modal,
  Button,
  View,
  StyleSheet,
  Text,
  Picker,
} from 'react-native';
import { connect } from 'react-redux';
import * as ActionCreators from '../../actions/modalPicker/actionCreators';

import { MainTintColor } from '../../const/commonConst';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  picker: {
    flex: 1,
    width: 300,
    height: 300,
  },
  title: {
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
  },
});

class ModalPicker extends PureComponent {

  actionConfirm = () => {
    
  };

  actionCancel = () => {
    
  };

  render() {
    return (
      <Modal
        transparent={this.props.shouldShow}
        animationType={'slide'}
      >
        <View
          style={styles.container}
        >
          <Text
            style={styles.title}
          >
            haha
          </Text>

          <Picker
            style={styles.picker}
          >
            {this.pickerItems()}
          </Picker>

          <View
            style={styles.btnArea}
          >
            <Button
              onPress={this.actionCancel}
              title={'Cancel'}
              color={MainTintColor}
            />
            <Button
              onPress={this.actionConfirm}
              title={'Confirm'}
              color={MainTintColor}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  const modalPickerConfigs = state.updateModalPickerConfigs.modalPickerConfigs;
  return {
    present: modalPickerConfigs.present,
    items: modalPickerConfigs.items,
  };
};

export default connect(mapStateToProps)(ModalPicker);

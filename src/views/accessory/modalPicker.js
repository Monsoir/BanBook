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
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import * as ActionCreators from '../../actions/modalPicker/actionCreators';

import { MainTintColor, BackgroundColor } from '../../const/commonConst';
import { getWindowWidth, getWindowHeight } from '../../utils/commonUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  subContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    width: getWindowWidth() * 0.6,
    backgroundColor: BackgroundColor,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 30,
    marginTop: 20,
  },
  picker: {
    alignSelf: 'center',
    width: getWindowWidth() * 0.6,
    height: 200,
  },
  btnArea: {
    flexDirection: 'row',
    height: 35,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
});

class ModalPicker extends PureComponent {

  actionConfirm = () => {
    this.props.dispatch(ActionCreators.ModalPickerConfirmSeletion(this.props.selected));
    this.props.onRequestClose(this.props.selected);
  };

  actionCancel = () => {
    // this.props.onRequestClose();
    this.props.dispatch(ActionCreators.DismissModalPicker());
  };

  actionPickerValueChanged = (value) => {
    this.props.dispatch(ActionCreators.ModalPickerSelectedChanged(value));
  };

  pickerItems = (items) => {
    const pickerItems = items.map((value, index) => {
      return (
        <Picker.Item key={index} label={value.label} value={value.value} />
      );
    });

    return pickerItems;
  };

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.present}
        animationType={'fade'}
      >
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={this.actionCancel}>
          <View
            style={styles.container}
          >
            <View style={styles.subContainer}>

              <Text
                style={styles.title}
              >
                {this.props.title}
              </Text>

              <Picker
                style={styles.picker}
                selectedValue={this.props.selected}
                onValueChange={(value) => this.actionPickerValueChanged(value)}
              >
                {this.pickerItems(this.props.items)}
              </Picker>

              <View
                style={styles.btnArea}
              >
                <Button
                  onPress={this.actionCancel}
                  title={'取消'}
                  color={MainTintColor}
                />
                <Button
                  onPress={this.actionConfirm}
                  title={'确定'}
                  color={MainTintColor}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  const modalPickerConfigs = state.updateModalPickerConfigs.modalPickerConfigs;
  return {
    present: modalPickerConfigs.present,
    title: modalPickerConfigs.title,
    items: modalPickerConfigs.items,
    selected: modalPickerConfigs.selected,
  };
};

export default connect(mapStateToProps)(ModalPicker);

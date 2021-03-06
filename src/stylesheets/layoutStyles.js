import { StyleSheet, Platform } from 'react-native';

export default layoutStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F8ECC2'
  },
  centeredFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusBarBuffer: {
    height: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFFFFF',
    width: '100%'
  },
  statusBar: {
    height: 40,
    backgroundColor: '#EEEEFF',
    width: '100%',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    borderTopColor: '#DDDDDD',
    borderTopWidth: 1,
    flexDirection: 'row'
  },
  button: {
    borderColor: '#999999',
    borderWidth: 2,
    backgroundColor: '#EEEEEE',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10
  },
  buttonText: {
    color: '#FFFFFF',
    paddingLeft: 10,
    paddingTop: 4,
    fontWeight: 'bold'
  },
  modal: {
    backgroundColor: "#EEEEEE",
    height: '100%'
  },
  modalContent: {
    flex: 1,
    borderTopColor: '#CCCCCC',
    borderTopWidth: 1
  },
  modalContentSection: {
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10
  },
  inputLabel: {
    paddingRight: 10,
    textAlignVertical: 'center'
  },
  settingsSectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingRight: 10,
    textAlignVertical: 'center'
  },
  toolbar: {
    width: '100%',
    backgroundColor: '#EEEEFF',
    borderTopColor: '#CCCCCC',
    borderTopWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  addButtonView: {
    width: 40,
    height: 40,
    borderLeftColor: '#CCCCCC',
    borderLeftWidth: 1,
    alignItems: 'center'
  },
  addButton: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 7,
    paddingLeft: 7
  },
  confirmBox: {
    borderColor: '#999999',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: '20%',
    width: '75%',
    height: '50%',
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  loadingScreen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#F8ECC2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelButton: {
    backgroundColor: '#999999',
    borderColor: '#888888'
  },
  confirmButton: {
    backgroundColor: '#009900',
    borderColor: '#008800'
  },
  deleteButton: {
    backgroundColor: '#DD0000',
    borderColor: '#CC0000'
  },
  errorInput: {
    borderColor: '#FF0000',
    borderWidth: 2
  }
});

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useModalContext } from '../../contexts/ModalContext';
import { AddNewModalContent } from '../newModal/AddNewModalContent';

export const AddButton = () => {
  const {
    AddNewModalVisible: AddNewModalVisible,
    toggleAddNewModal: toggleAddNewModal,
  } = useModalContext();

  return (
    <View style={{ marginLeft: 10, marginRight: 10 }}>
      <TouchableOpacity
        onPress={() => {
          toggleAddNewModal(true);
        }}
      >
        <View>
          <Ionicons name="md-add-circle" size={45} color="black" />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={AddNewModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Ionicons
              name="close-outline"
              size={40}
              color="black"
              onPress={() => toggleAddNewModal(false)}
              style={styles.buttonClose}
            />
            <AddNewModalContent />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: 340,
    height: 600,
    margin: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 100,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});

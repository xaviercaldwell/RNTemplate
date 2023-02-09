

import React, { useEffect, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
interface ModalProps {
  loading: boolean;
}


export default function InfoModal(props: ModalProps): JSX.Element {
  return (
    <View style={styles.Row}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.loading}>
        <View style={styles.deadspace}></View>
        <View style={styles.modalView}>
          <View style={styles.Row}><Text style={styles.modalText}>Loading</Text></View>
          <View style={styles.Row}><ActivityIndicator size="large" /></View>
        </View>
        <View style={styles.deadspace}></View>
      </Modal>
    </View>
  );

}
const styles = StyleSheet.create({
 
  Row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center'
  },
 
  deadspace: {
    flex: 3
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalView: {
    flexDirection: "column",
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },


    alignSelf: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});


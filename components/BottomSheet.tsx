import React, { useEffect, useRef } from 'react';
import { Animated, Modal, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  height?: number;
};

export const BottomSheet = ({ visible, onClose, children, height = 560 }: Props) => {
  const slide = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slide, { toValue: 1, duration: 300, useNativeDriver: true }).start();
    } else {
      Animated.timing(slide, { toValue: 0, duration: 200, useNativeDriver: true }).start();
    }
  }, [visible]);

  const translateY = slide.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 0],
  });

  return (
    <Modal visible={visible} transparent animationType="none">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.sheet, { height, transform: [{ translateY }] }]}>
        {children}
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 12,
  },
});

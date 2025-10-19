import React, { useEffect, useRef } from 'react';
import { Animated, Modal, View } from 'react-native';

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
  }, [visible, slide]);

  const translateY = slide.interpolate({
    inputRange: [0, 1],
    outputRange: [height, 0],
  });

  return (
    <Modal visible={visible} transparent animationType="none">
      <Animated.View
        style={[{ height, transform: [{ translateY }] }]}
        className="absolute bottom-0 left-0 right-0 bg-black rounded-t-2xl p-3">
        {children}
      </Animated.View>
    </Modal>
  );
};

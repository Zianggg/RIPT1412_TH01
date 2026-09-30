import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import type { Palette } from '../theme/palette';
import { Icon } from './Icon';

type Props = {
  value: string;
  colors: Palette;
  onChangeText: (value: string) => void;
};

export function SearchBar({ value, colors, onChangeText }: Props) {
  return (
    <View
      style={[
        styles.bar,
        { backgroundColor: colors.field },
      ]}
    >
      <Icon name="search" color={colors.muted} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Tìm môn học"
        placeholderTextColor={colors.muted}
        style={[styles.input, { color: colors.ink }]}
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
        accessibilityLabel="Ô tìm kiếm môn học"
      />
      {value.length > 0 ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Xóa từ khóa"
          onPress={() => onChangeText('')}
          hitSlop={8}
          style={({ pressed }) => pressed && styles.pressed}
        >
          <Text style={[styles.clear, { color: colors.muted }]}>×</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    marginHorizontal: 20,
    marginTop: 22,
    paddingHorizontal: 16,
    borderRadius: 26,
    gap: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    paddingVertical: 0,
  },
  clear: {
    fontSize: 22,
    lineHeight: 24,
  },
  pressed: {
    opacity: 0.6,
  },
});

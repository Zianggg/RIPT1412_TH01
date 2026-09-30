import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { Palette } from '../theme/palette';
import { Icon, type IconName } from './Icon';

const tabs: { id: 'home' | 'courses' | 'tasks' | 'profile'; label: string; icon: IconName }[] = [
  { id: 'home', label: 'Trang chủ', icon: 'home' },
  { id: 'courses', label: 'Môn học', icon: 'courses' },
  { id: 'tasks', label: 'Bài tập', icon: 'task' },
  { id: 'profile', label: 'Cá nhân', icon: 'user' },
];

type Props = {
  colors: Palette;
};

export function BottomNav({ colors }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.bar,
        {
          backgroundColor: colors.card,
          borderTopColor: colors.line,
          paddingBottom: Math.max(insets.bottom, 8),
        },
      ]}
    >
      {tabs.map(tab => {
        const active = tab.id === 'home';
        const color = active ? colors.onNeon : colors.muted;
        return (
          <View
            key={tab.id}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            accessibilityLabel={tab.label}
            style={styles.item}
          >
            <View
              collapsable={false}
              style={[
                styles.iconWell,
                active ? { backgroundColor: colors.progress } : null,
              ]}
            >
              <Icon name={tab.icon} color={color} />
            </View>
            <Text
              style={[
                styles.label,
                { color: active ? colors.ink : colors.muted },
              ]}
            >
              {tab.label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
    paddingBottom: 6,
  },
  iconWell: {
    width: 48,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
  },
});

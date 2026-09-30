import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import avatar from '../../assets/avatar.png';
import type { Palette } from '../theme/palette';
import { Icon } from './Icon';

type Props = {
  greeting: string;
  name: string;
  colors: Palette;
  isDark: boolean;
  hasNotice: boolean;
  onToggleTheme: () => void;
  onPressNotice: () => void;
};

export function Header({
  greeting,
  name,
  colors,
  isDark,
  hasNotice,
  onToggleTheme,
  onPressNotice,
}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.wrap,
        {
          backgroundColor: colors.header,
          paddingTop: insets.top + 16,
          borderBottomColor: colors.line,
        },
      ]}
    >
      <View style={styles.row}>
        <View style={styles.identity}>
          <Text style={[styles.greeting, { color: colors.onHeaderMuted }]}>
            {greeting}
          </Text>
          <Text
            style={[styles.name, { color: colors.onHeader }]}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.8}
          >
            {name}
          </Text>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            isDark ? 'Bật giao diện sáng' : 'Bật giao diện tối'
          }
          onPress={onToggleTheme}
          style={({ pressed }) => [
            styles.themeButton,
            pressed && styles.pressed,
          ]}
        >
          <Icon name={isDark ? 'sun' : 'moon'} color={colors.onHeader} />
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Thông báo"
          onPress={onPressNotice}
          style={({ pressed }) => [styles.bell, pressed && styles.pressed]}
        >
          <Icon name="bell" color={colors.onHeader} />
          {hasNotice ? (
            <View style={[styles.dot, { backgroundColor: colors.stamp }]} />
          ) : null}
        </Pressable>
        <Image
          source={avatar}
          accessibilityLabel={`Ảnh đại diện của ${name}`}
          style={styles.avatar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  identity: {
    flex: 1,
  },
  greeting: {
    fontSize: 14,
    lineHeight: 18,
  },
  name: {
    marginTop: 2,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
  },
  themeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bell: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#C6FF3D',
    backgroundColor: '#1A1A1A',
  },
  pressed: {
    opacity: 0.7,
  },
});

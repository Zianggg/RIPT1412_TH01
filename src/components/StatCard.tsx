import { StyleSheet, Text, View } from 'react-native';
import type { Palette } from '../theme/palette';
import { Icon, type IconName } from './Icon';

type Props = {
  label: string;
  value: number;
  icon: IconName;
  colors: Palette;
};

export function StatCard({ label, value, icon, colors }: Props) {
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.line },
      ]}
    >
      <View style={[styles.iconWrap, { backgroundColor: colors.tint }]}>
        <Icon name={icon} color={colors.ink} />
      </View>
      <Text style={[styles.value, { color: colors.ink }]}>{value}</Text>
      <Text style={[styles.label, { color: colors.muted }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 18,
    alignItems: 'center',
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    marginTop: 14,
    fontSize: 28,
    lineHeight: 32,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  label: {
    marginTop: 4,
    minHeight: 42,
    fontSize: 11,
    lineHeight: 14,
    textAlign: 'center',
  },
});

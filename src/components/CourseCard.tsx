import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Course } from '../data/content';
import type { Palette } from '../theme/palette';

type Props = {
  course: Course;
  colors: Palette;
};

export function CourseCard({ course, colors }: Props) {
  const done = course.progress >= 100;
  const width = `${Math.min(100, Math.max(0, course.progress))}%` as const;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={course.name}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.line },
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.top}>
        <View style={[styles.mark, { backgroundColor: colors.ink }]}>
          <Text style={[styles.code, { color: colors.card }]}>{course.code}</Text>
        </View>
        <View style={styles.info}>
          <Text style={[styles.name, { color: colors.ink }]} numberOfLines={1}>
            {course.name}
          </Text>
          <View style={styles.meta}>
            <Text style={[styles.lessons, { color: colors.muted }]}>
              {course.lessons} bài học
            </Text>
            {done ? (
              <View style={[styles.donePill, { backgroundColor: colors.progress }]}>
                <Text style={[styles.done, { color: colors.onNeon }]}>
                  Đã hoàn thành
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <Text style={[styles.percent, { color: colors.ink }]}>
          {course.progress}%
        </Text>
      </View>
      <View style={[styles.track, { backgroundColor: colors.track }]}>
        <View
          style={[styles.fill, { width, backgroundColor: colors.progress }]}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginBottom: 14,
    borderRadius: 24,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.985 }],
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  mark: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  code: {
    fontSize: 14,
    fontWeight: '700',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '700',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 3,
  },
  lessons: {
    fontSize: 13,
    lineHeight: 18,
  },
  donePill: {
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  done: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
  },
  percent: {
    fontSize: 18,
    fontWeight: '700',
    fontVariant: ['tabular-nums'],
  },
  track: {
    height: 6,
    borderRadius: 999,
    marginTop: 16,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 999,
  },
});

import { useMemo, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { BottomNav } from '../components/BottomNav';
import { CourseCard } from '../components/CourseCard';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { StatCard } from '../components/StatCard';
import {
  assignmentTotal,
  courses,
  greetingForHour,
  student,
} from '../data/content';
import { darkPalette, lightPalette } from '../theme/palette';

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

export function HomeScreen() {
  const [isDark, setIsDark] = useState(false);
  const [query, setQuery] = useState('');
  const [hasNotice, setHasNotice] = useState(true);
  const colors = isDark ? darkPalette : lightPalette;
  const greeting = greetingForHour(new Date().getHours());
  const completed = courses.filter(course => course.progress >= 100).length;

  const visibleCourses = useMemo(() => {
    const keyword = normalize(query);
    if (!keyword) {
      return courses;
    }
    return courses.filter(course => normalize(course.name).includes(keyword));
  }, [query]);

  return (
    <View style={[styles.screen, { backgroundColor: colors.paper }]}>
      <StatusBar barStyle="light-content" />
      <Header
        greeting={greeting}
        name={student.name}
        colors={colors}
        isDark={isDark}
        hasNotice={hasNotice}
        onToggleTheme={() => setIsDark(value => !value)}
        onPressNotice={() => setHasNotice(false)}
      />
      <FlatList
          data={visibleCourses}
          keyExtractor={item => item.id}
          extraData={isDark}
          renderItem={({ item }) => (
            <CourseCard course={item} colors={colors} />
          )}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          ListHeaderComponent={
            <View>
              <View style={styles.stats}>
                <StatCard
                  label="Tổng số môn học"
                  value={courses.length}
                  icon="book"
                  colors={colors}
                />
                <StatCard
                  label="Số bài tập"
                  value={assignmentTotal}
                  icon="task"
                  colors={colors}
                />
                <StatCard
                  label="Số môn đã hoàn thành"
                  value={completed}
                  icon="check"
                  colors={colors}
                />
              </View>
              <SearchBar
                value={query}
                colors={colors}
                onChangeText={setQuery}
              />
              <Text style={[styles.section, { color: colors.ink }]}>
                Môn học của bạn
              </Text>
            </View>
          }
          ListEmptyComponent={
            <Text style={[styles.empty, { color: colors.muted }]}>
              Không tìm thấy môn học phù hợp.
            </Text>
          }
        />
      <BottomNav colors={colors} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  list: {
    paddingBottom: 20,
  },
  stats: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
    marginHorizontal: 20,
  },
  section: {
    marginTop: 28,
    marginBottom: 14,
    marginHorizontal: 20,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
  },
  empty: {
    marginHorizontal: 20,
    fontSize: 14,
    lineHeight: 20,
  },
});

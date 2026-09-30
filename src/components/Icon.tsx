import { StyleSheet, Text, View } from 'react-native';

export type IconName =
  | 'book'
  | 'task'
  | 'check'
  | 'bell'
  | 'search'
  | 'home'
  | 'courses'
  | 'user'
  | 'sun'
  | 'moon';

type Props = {
  name: IconName;
  color: string;
};

type GlyphProps = {
  color: string;
};

function Book({ color }: GlyphProps) {
  return (
    <View style={styles.centerRow}>
      <View style={[styles.bookPage, { borderColor: color }]} />
      <View style={[styles.spine, { backgroundColor: color }]} />
      <View style={[styles.bookPage, { borderColor: color }]} />
    </View>
  );
}

function Task({ color }: GlyphProps) {
  return (
    <View style={styles.center}>
      <View style={[styles.clip, { backgroundColor: color }]} />
      <View style={[styles.clipboard, { borderColor: color }]}>
        <View style={[styles.lineWide, { backgroundColor: color }]} />
        <View style={[styles.lineWide, { backgroundColor: color }]} />
        <View style={[styles.lineShort, { backgroundColor: color }]} />
      </View>
    </View>
  );
}

function Check({ color }: GlyphProps) {
  return (
    <View style={[styles.checkRing, { borderColor: color }]}>
      <Text style={[styles.checkMark, { color }]}>✓</Text>
    </View>
  );
}

function Bell({ color }: GlyphProps) {
  return (
    <View style={styles.center}>
      <View style={[styles.bellBody, { borderColor: color }]} />
      <View style={[styles.bellBar, { backgroundColor: color }]} />
      <View style={[styles.bellClapper, { backgroundColor: color }]} />
    </View>
  );
}

function Search({ color }: GlyphProps) {
  return (
    <View style={styles.iconBox}>
      <View style={[styles.searchRing, { borderColor: color }]} />
      <View style={[styles.searchHandle, { backgroundColor: color }]} />
    </View>
  );
}

function Home({ color }: GlyphProps) {
  return (
    <View style={styles.center}>
      <View style={[styles.roof, { borderColor: color }]} />
      <View style={[styles.house, { borderColor: color }]} />
    </View>
  );
}

function Courses({ color }: GlyphProps) {
  return (
    <View style={styles.grid}>
      {[0, 1, 2, 3].map(item => (
        <View key={item} style={[styles.cell, { borderColor: color }]} />
      ))}
    </View>
  );
}

function Sun({ color }: GlyphProps) {
  return (
    <View style={styles.center}>
      <View style={[styles.sunCore, { borderColor: color }]} />
      <View
        style={[styles.sunRayV, styles.sunRayTop, { backgroundColor: color }]}
      />
      <View
        style={[
          styles.sunRayV,
          styles.sunRayBottom,
          { backgroundColor: color },
        ]}
      />
      <View
        style={[styles.sunRayH, styles.sunRayLeft, { backgroundColor: color }]}
      />
      <View
        style={[styles.sunRayH, styles.sunRayRight, { backgroundColor: color }]}
      />
    </View>
  );
}

function Moon({ color }: GlyphProps) {
  return (
    <View style={styles.center}>
      <View style={[styles.moon, { borderColor: color }]} />
    </View>
  );
}

function User({ color }: GlyphProps) {
  return (
    <View style={styles.center}>
      <View style={[styles.head, { borderColor: color }]} />
      <View style={[styles.shoulders, { borderColor: color }]} />
    </View>
  );
}

const glyphs = {
  book: Book,
  task: Task,
  check: Check,
  bell: Bell,
  search: Search,
  home: Home,
  courses: Courses,
  user: User,
  sun: Sun,
  moon: Moon,
};

export function Icon({ name, color }: Props) {
  const Glyph = glyphs[name];
  return <Glyph color={color} />;
}

const styles = StyleSheet.create({
  iconBox: {
    width: 22,
    height: 22,
  },
  center: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerRow: {
    width: 22,
    height: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookPage: {
    width: 8,
    height: 15,
    borderWidth: 1.75,
    borderRadius: 2,
  },
  spine: {
    width: 1.75,
    height: 15,
  },
  clipboard: {
    width: 14,
    height: 15,
    borderWidth: 1.75,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  clip: {
    position: 'absolute',
    top: 1,
    width: 6,
    height: 3,
    borderRadius: 1,
  },
  lineWide: {
    width: 8,
    height: 1.75,
    borderRadius: 1,
  },
  lineShort: {
    width: 5,
    height: 1.75,
    borderRadius: 1,
  },
  checkRing: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '700',
    marginTop: -1,
  },
  bellBody: {
    width: 10,
    height: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1.75,
    borderBottomWidth: 0,
  },
  bellBar: {
    width: 14,
    height: 1.75,
  },
  bellClapper: {
    width: 4,
    height: 2,
    marginTop: 1,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  searchRing: {
    width: 11,
    height: 11,
    borderRadius: 6,
    borderWidth: 1.75,
    marginTop: 2,
    marginLeft: 2,
  },
  searchHandle: {
    position: 'absolute',
    width: 6,
    height: 1.75,
    right: 2,
    bottom: 3,
    transform: [{ rotate: '45deg' }],
  },
  roof: {
    width: 9,
    height: 9,
    borderLeftWidth: 1.75,
    borderTopWidth: 1.75,
    transform: [{ rotate: '45deg' }],
    marginBottom: -3,
  },
  house: {
    width: 13,
    height: 8,
    borderWidth: 1.75,
    borderTopWidth: 0,
  },
  grid: {
    width: 22,
    height: 22,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  cell: {
    width: 7,
    height: 7,
    borderRadius: 1,
    borderWidth: 1.75,
  },
  head: {
    width: 7,
    height: 7,
    borderRadius: 4,
    borderWidth: 1.75,
  },
  shoulders: {
    width: 13,
    height: 6,
    marginTop: 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1.75,
    borderBottomWidth: 0,
  },
  sunCore: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.75,
  },
  sunRayV: {
    position: 'absolute',
    width: 1.75,
    height: 3,
    borderRadius: 1,
    left: 10,
  },
  sunRayH: {
    position: 'absolute',
    width: 3,
    height: 1.75,
    borderRadius: 1,
    top: 10,
  },
  sunRayTop: {
    top: 1,
  },
  sunRayBottom: {
    bottom: 1,
  },
  sunRayLeft: {
    left: 1,
  },
  sunRayRight: {
    right: 1,
  },
  moon: {
    width: 13,
    height: 13,
    borderRadius: 7,
    borderWidth: 1.75,
    borderRightWidth: 0,
    transform: [{ rotate: '-32deg' }],
  },
});

export type Course = {
  id: string;
  code: string;
  name: string;
  lessons: number;
  progress: number;
};

export const student = {
  // Đổi họ tên sinh viên tại đây.
  name: 'Nguyễn Minh Khang',
};

export const assignmentTotal = 18;

export const courses: Course[] = [
  {
    id: 'lt',
    code: 'LT',
    name: 'Lập trình di động',
    lessons: 12,
    progress: 75,
  },
  {
    id: 'csdl',
    code: 'DL',
    name: 'Cơ sở dữ liệu',
    lessons: 10,
    progress: 100,
  },
  {
    id: 'ctdl',
    code: 'CT',
    name: 'Cấu trúc dữ liệu',
    lessons: 16,
    progress: 45,
  },
  {
    id: 'mmt',
    code: 'MM',
    name: 'Mạng máy tính',
    lessons: 8,
    progress: 20,
  },
  {
    id: 'trr',
    code: 'TR',
    name: 'Toán rời rạc',
    lessons: 14,
    progress: 100,
  },
];

export function greetingForHour(hour: number) {
  if (hour < 11) {
    return 'Chào buổi sáng';
  }
  if (hour < 18) {
    return 'Chào buổi chiều';
  }
  return 'Chào buổi tối';
}

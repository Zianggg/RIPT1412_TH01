/**
 * @format
 */

import React from 'react';
import { Text, TextInput } from 'react-native';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

jest.mock('react-native-safe-area-context', () => {
  const ReactLib = require('react');
  return {
    SafeAreaProvider: ({ children }: { children: React.ReactNode }) =>
      ReactLib.createElement(ReactLib.Fragment, null, children),
    useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
  };
});

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

function visibleText(renderer: ReactTestRenderer.ReactTestRenderer) {
  return renderer.root
    .findAllByType(Text)
    .map(node => node.props.children)
    .flat()
    .filter(child => typeof child === 'string')
    .join('\n');
}

test('renders the student home screen', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer;
  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });

  const text = visibleText(renderer!);
  expect(text).toContain('Nguyễn Minh Khang');
  expect(text).toContain('Tổng số môn học');
  expect(text).toContain('Số bài tập');
  expect(text).toContain('Số môn đã hoàn thành');
  expect(text).toContain('Lập trình di động');
  expect(text).toContain('Đã hoàn thành');
  expect(text).toContain('Trang chủ');
  expect(text).toContain('Cá nhân');

  const input = renderer!.root.findByType(TextInput);
  expect(input.props.placeholder).toBe('Tìm môn học');
});

test('filters courses from the search box', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer;
  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });

  const input = renderer!.root.findByType(TextInput);
  await ReactTestRenderer.act(() => {
    input.props.onChangeText('mang');
  });

  const text = visibleText(renderer!);
  expect(text).toContain('Mạng máy tính');
  expect(text).not.toContain('Lập trình di động');
});

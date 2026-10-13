export const COURSES = [
  {
    code: 'PRF192',
    name: 'Programming Fundamentals',
    credits: 3,
    semester: 'Fall',
    desc: 'Nhập môn lập trình với các khái niệm nền tảng về thuật toán và ngôn ngữ C.',
  },
  {
    code: 'WED201c',
    name: 'Web Design',
    credits: 3,
    semester: 'Spring',
    desc: 'Thiết kế giao diện web với HTML, CSS và các nguyên tắc trải nghiệm người dùng.',
  },
  {
    code: 'PRO192',
    name: 'Object-Oriented Programming',
    credits: 3,
    semester: 'Summer',
    desc: 'Lập trình hướng đối tượng với Java, lớp, đối tượng và các nguyên lý OOP.',
  },
  {
    code: 'FER202',
    name: 'Front-End Development with React',
    credits: 3,
    semester: 'Fall',
    desc: 'Xây dựng ứng dụng web hiện đại với React, component, state và routing.',
  },
  {
    code: 'SWP391',
    name: 'Software Project',
    credits: 6,
    semester: 'Spring',
    desc: 'Làm việc nhóm để phân tích, thiết kế và phát triển một sản phẩm phần mềm.',
  },
];

export function findCourse(code) {
  return COURSES.find((course) => course.code.toLowerCase() === code?.toLowerCase());
}

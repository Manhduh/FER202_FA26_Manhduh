import React, { useState } from 'react';
import StarRating from './StarRating'; // Nhớ điều chỉnh lại đường dẫn file StarRating cho đúng

export default function App() {
  // State lưu trữ số sao người dùng đã chọn (mặc định là 0)
  const [rating, setRating] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Đánh giá sản phẩm</h2>
      
      {/* Gọi component StarRating và truyền các props */}
      <StarRating 
        value={rating} 
        onChange={(newRating) => setRating(newRating)} 
      />

      {/* Hiển thị giá trị được chọn thực tế */}
      <div style={{ marginTop: '10px' }}>
        <p>Giá trị lưu trong state: <strong>{rating} / 5</strong></p>
      </div>
    </div>
  );
}
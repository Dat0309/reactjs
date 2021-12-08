import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const arrSV = ["Dinh Trong Dat", "Tran Minh Canh", "Dao Xuan Hai"];

function ThemSinhVien(props) {
  const [ ten, setTen ] = useState("");

  // Hàm xử lý khi 
  // người dùng điền tên sinh viên
  function handleChange(e) {
    setTen(e.target.value);
  }

  // Hàm xử lý khi
  // người dùng nhấn Thêm sinh viên (submit)
  function handleSubmit(e) {
    props.handleSubmit(ten);
    setTen('');
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder="Tên sinh viên"
      onChange={handleChange}
      value={ten} />
      <button type="submit">Thêm sinh viên</button>
    </form>
  );
}

function SinhViens(props) {
  // Lấy dữ liệu ban đầu
  const danhSachSV = props.data;

  // Đặt tên từng sinh viên vào trong thẻ li
  const sinhViens = danhSachSV.map((sv, index) =>
    <li key={index}>{sv}</li>
  );

  return <ul>{sinhViens}</ul>;
}

function DSSinhVien(props){
  const [duLieu, setDuLieu] = useState(props.data);

  function themSV(ten){
    setDuLieu([...duLieu, ten]);
  }

  return(
    <div>
      <ThemSinhVien handleSubmit={themSV}/>
      <SinhViens data={duLieu}/>
    </div>
  );
}

const e1 = (
  <div>
    <App />
  </div>
);

ReactDOM.render(
  e1,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

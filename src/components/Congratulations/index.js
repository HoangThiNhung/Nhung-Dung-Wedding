// components/Congratulations.js
import React, { useState, useEffect } from 'react';
// import styles from '../styles/Congratulations.module.scss';

const Congratulations = ({ show }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      setTimeout(() => setVisible(false), 3000); // Hiệu ứng tự đóng sau 3 giây
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div className="congratulations">
      <h2>Thankyou!</h2>
      <p>Lời chúc của bạn đã được gửi đến cô dâu chú rể.</p>
    </div>
  );
};

export default Congratulations;

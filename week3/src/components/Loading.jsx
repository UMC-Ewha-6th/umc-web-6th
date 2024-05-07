import React from 'react';
import loading from '../assets/loading.gif'; // 로딩 GIF 파일 경로

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={loading} alt="로딩 중..." />
    </div>
  );
}

export default Loading;
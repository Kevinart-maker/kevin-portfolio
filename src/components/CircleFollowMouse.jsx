import React, { useState, useEffect } from 'react';

const CircleFollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const circleSize = 70;

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX - circleSize / 2, y: e.clientY - circleSize / 2 });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className='cicles' style={{ position: 'fixed', left: position.x, top: position.y, zIndex: '-100' }}>
      <div
        style={{
          width: '6rem',
          height: '6rem',
          borderRadius: '50%',
          border: '1px solid white',
          position: 'relative',
          transition: '0.1s linear all'
        }}
        className='outer-circle'
      >
        {/* <div
            style={
                {
                    width: '0.5rem',
                    height: '0.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    position: 'absolute',
                    left: '45%',
                    bottom: '45%'
                }
            }
            className='inner-circle'
        ></div> */}
      </div>
    </div>
  );
};

export default CircleFollowMouse;
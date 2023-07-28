import React, { useState, MouseEvent } from 'react';
import './SpinButton.css';

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const [ariaText, setAriaText] = useState('');

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setAriaText('성인 승객 추가');
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    setAriaText('성인 승객 감소');
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className='spinButtonContainer'>
      <div>
        <h1>승객 선택</h1>
        <div className='spinButtonLabel'>
          <label>성인</label>
          <div
            className='helpIcon'
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
          >
            ?
            {isTooltipVisible && (
              <span className='tooltip'>최대 인원수는 3명까지 가능합니다</span>
            )}
          </div>
        </div>
        <button
          onClick={decrement}
          className='spinButton'
          aria-label='성인 탑승자 한명 줄이기'
          disabled={count === 0}
        >
          -
        </button>
        <p aria-live='assertive' aria-hidden={false}>
          {ariaText} {count}
        </p>
        <input
          id='spinButtonInput'
          type='number'
          role='spinbutton'
          readOnly
          className='spinButtonInput'
          value={count}
          min={1}
          max={3}
          aria-label='텍스트 숫자만 수정'
        />
        <button
          onClick={increment}
          className='spinButton'
          aria-label='성인 탑승자 한명 늘리기'
          disabled={count === 3}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default SpinButton;

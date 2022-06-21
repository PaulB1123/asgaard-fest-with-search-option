import React from 'react';
import useCountdown from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';
import { Link } from 'react-router-dom';

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      
    );
  }
};

export default CountdownTimer;

const ExpiredNotice = () => {
    return (
      <div>
        <p>The time has expired</p>
      </div>
    );
  };

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex w-full justify-center phone:justify-end">
          {/* <DateTimeDisplay value={days} type={'Days'} isDanger={days <=3} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <p>:</p> */}
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
          <p className='flex'>&nbsp;to<Link className='hover:bg-concert-b-green' to={"/purchases"}>&nbsp;complete the order</Link></p>
      </div>
    );
  };
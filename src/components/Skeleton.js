import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          marginTop: '30px',
          justifyContent: 'space-around',
        }}
      >
        <Skeleton
          variant="circle"
          width={80}
          height={80}
          style={{ marginTop: '10px' }}
        />
        <Skeleton variant="text" width={900} height={100} />

        <Skeleton variant="text" width={900} height={100} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '30px',
        }}
      >
        <Skeleton variant="rect" width={510} height={40} />
        <Skeleton variant="rect" width={510} height={40} />
        <Skeleton variant="rect" width={510} height={40} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '30px',
        }}
      >
        <Skeleton variant="rect" width={510} height={610} />
        <Skeleton variant="rect" width={510} height={610} />
        <Skeleton variant="rect" width={510} height={610} />
      </div>
    </div>
  );
}

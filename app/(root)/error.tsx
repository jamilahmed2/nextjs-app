'use client';

const error = () => {
    throw new Error('Client side error component');
  return (
    <div>some thing went wrong</div>
  )
}

export default error
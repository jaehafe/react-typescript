import React from 'react';

type GenderProps = {
  gender: string;
  className?: string;
};

const Gender = ({ className, gender }: GenderProps) => (
  <p className={className}>{gender}</p>
);

export default Gender;

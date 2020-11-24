import React, { ChangeEvent } from 'react';

interface Props {
  value: string;
  onChange: (v: string) => void;
  children: any;
}

export default ({ value, onChange, children }: Props) => (
  <div>
    <label htmlFor='search'>{children}</label>
    <input
      id='search'
      type='text'
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    />
  </div>
);

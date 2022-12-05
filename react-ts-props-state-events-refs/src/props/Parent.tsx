import React from 'react';
import { ChildAsFC } from './Child';

export default function Parent() {
  return (
    <div>
      <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
        ss
      </ChildAsFC>
    </div>
  );
}

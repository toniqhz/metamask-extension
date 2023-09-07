import React, { useContext } from 'react';
import { SelectContext } from '../select-wrapper/select-wrapper';

export const SelectButton: React.FC = ({ children }) => {
  const selectContext = useContext(SelectContext);

  if (!selectContext) {
    throw new Error('SelectButton must be used within a SelectWrapper.');
  }

  const { selectedValue, isOpen, toggleOpen } = selectContext;

  return (
    <button onClick={toggleOpen}>
      {children} {isOpen ? 'yes' : 'no'}
    </button>
  );
};

import React, { createContext, useContext, useState } from 'react';

// Define the context shape
interface SelectWrapperContextType {
  isOpen: boolean;
  toggleOpen: () => void;
  placeholder: any | undefined;
}

// Create the context
const SelectWrapperContext = createContext<
  SelectWrapperContextType | undefined
>(undefined);

// Create a hook to use the context
export const useSelectWrapperContext = () => {
  const context = useContext(SelectWrapperContext);
  if (!context) {
    throw new Error(
      'useSelectWrapperContext must be used within a SelectWrapperContextProvider',
    );
  }
  return context;
};

// Create the context provider component
export const SelectWrapperContextProvider: React.FC<{
  placeholder?: any;
}> = ({ placeholder, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const contextValue: SelectWrapperContextType = {
    isOpen,
    toggleOpen,
    placeholder,
  };

  return (
    <SelectWrapperContext.Provider value={contextValue}>
      {children}
    </SelectWrapperContext.Provider>
  );
};

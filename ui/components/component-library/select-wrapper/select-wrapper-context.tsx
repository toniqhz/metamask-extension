import React, { createContext, useContext, useState } from 'react';

interface SelectWrapperContextType {
  isOpen: boolean;
  toggleOpen: () => void;
  placeholder?: any | undefined;
  defaultValue?: any | undefined;
  value?: any | undefined;
  onChange?: any | undefined;
  name?: any | undefined;
  onFocus?: any | undefined;
  onBlur?: any | undefined;
}

// Omitting the props from SelectWrapperContextType to define the props for SelectWrapperContextProvider
type SelectWrapperContextProviderProps = Omit<
  SelectWrapperContextType,
  'isOpen' | 'toggleOpen'
>;

const SelectWrapperContext = createContext<
  SelectWrapperContextType | undefined
>(undefined);

export const useSelectWrapperContext = () => {
  const context = useContext(SelectWrapperContext);
  if (!context) {
    throw new Error(
      'useSelectWrapperContext must be used within a SelectWrapperContextProvider',
    );
  }
  return context;
};

export const SelectWrapperContextProvider: React.FC<
  SelectWrapperContextProviderProps
> = ({
  placeholder,
  children,
  defaultValue,
  value,
  onChange,
  name,
  onFocus,
  onBlur,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log('toggleOpen triggered', isOpen);
    setIsOpen(!isOpen);
  };

  const contextValue: SelectWrapperContextType = {
    isOpen,
    toggleOpen,
    placeholder,
    defaultValue,
    value,
    onChange,
    name,
    onFocus,
    onBlur,
  };

  return (
    <SelectWrapperContext.Provider value={contextValue}>
      {children}
    </SelectWrapperContext.Provider>
  );
};

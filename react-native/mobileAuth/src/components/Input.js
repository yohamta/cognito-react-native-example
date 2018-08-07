import React from 'react';
import { Input } from 'native-base';

export default props => {
  const { input, ...inputProps } = props;
  return (
    <Input
      {...inputProps}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
    />
  );
};

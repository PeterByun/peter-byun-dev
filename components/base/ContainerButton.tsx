'use client';
import './Container.css';

import { forwardRef } from 'react';
import { BaseComponentProps } from '../../types/component-types';
import { ButtonAttributes } from '../../types/dom-types';
import { getContainerColor } from './Container';
import clsx from 'clsx';

type ContainerProps = BaseComponentProps<ButtonAttributes> & {
  level: 1 | 2 | 3;
};

export const ContainerButton = forwardRef<HTMLButtonElement, ContainerProps>(
  ({ level = 1, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx('container', className, getContainerColor(level))}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

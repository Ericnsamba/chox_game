import React from 'react';
import type { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

export const xIcon: React.FC<IconProps> = ({ color = 'blue', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} {...props}>
    <path d="M18.36 6.64a1 1 0 0 0-1.42 0L12 11.59 7.05 6.64a1 1 0 1 0-1.42 1.42L10.59 12l-5.05 5.05a1 1 0 0 0 1.42 1.42L12 12.41l4.95 4.95a1 1 0 0 0 1.42-1.42L13.41 12l5.05-5.05a1 1 0 0 0 0-1.42z" />
  </svg>
);

export const oIcon: React.FC<IconProps> = ({ color = 'blue', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} {...props}>
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
  </svg>
);
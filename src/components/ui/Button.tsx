import type { ComponentPropsWithoutRef } from 'react';

type RetroButtonProps = ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className = '',
  type = 'button',
  ...props
}: RetroButtonProps) {
  return (
    <button {...props} type={type} className={`btn-base ${className}`}>
      <span className="btn-base__content">{children}</span>
    </button>
  );
}

import React from 'react';

interface ButtonProps {
  /** ボタンのバリアント */
  variant?: 'primary' | 'secondary';
  /** ボタンサイズ */
  size?: 'small' | 'medium' | 'large';
  /** ボタンのラベル */
  children: React.ReactNode;
  /** クリックハンドラー */
  onClick?: () => void;
  /** ボタンが無効かどうか */
  disabled?: boolean;
}

/**
 * プライマリUIコンポーネント - ユーザーアクション用のボタン
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseClasses = 'rounded-full border border-solid transition-colors flex items-center justify-center font-medium';
  
  const variantClasses = {
    primary: 'border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]',
    secondary: 'border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent'
  };
  
  const sizeClasses = {
    small: 'text-sm h-8 px-3',
    medium: 'text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5',
    large: 'text-base h-12 px-6'
  };
  
  const className = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  ].join(' ');

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
"use client"
import React, { ReactNode } from "react";
import clsx from "clsx"; // Alternative to `cn` utility

interface CardProps {
  className?: string;
  children: ReactNode;
  [key: string]: any;
}

interface CardContentProps {
  className?: string;
  children: ReactNode;
  [key: string]: any;
}

const Card = ({ className = "", children, ...props }: CardProps) => {
  return (
    <div className={clsx("rounded-lg border bg-white shadow-sm", className)} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ className = "", children, ...props }: CardContentProps) => {
  return (
    <div className={clsx("p-4", className)} {...props}>
      {children}
    </div>
  );
};

export { Card, CardContent };

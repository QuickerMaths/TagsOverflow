import { cn } from '@/utils/cn';
import React from 'react'

const variants = {
  h1: "h1-variant",
  h2: "h2-variant",
  h3: "h3-variant",
  subtitle: "h4-variant",
  paragraph: "p-variant",
  span: "span-variant",
};

const tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  span: "span",
};

interface TypographyProps {
  tag?: keyof typeof tags;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
}
const Typography = ({ tag, variant = 'paragraph', className, children }: TypographyProps) => {
  const Component = tag ? tags[tag] : "p"

  return (
    //@ts-ignore
    <Component className={cn(variants[variant], className)}>
        {children}
    </Component>
  )
}

export default Typography
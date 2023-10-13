interface TextProps {
  children: React.ReactNode;
  color: string;
  size?: 'title' | 'large' | 'body' | 'footnote';
  bold?: boolean;
  italic?: boolean;
}

export default TextProps;

import match from '../../../utils/match';
import styles from './Heading.module.scss';
import type HeadingProps from './Heading.props';

const Heading = ({
  variant = 'h2',
  children,
  className,
  decorated,
  ...rest
}: HeadingProps<'h1' | 'h2' | 'h3'>) => {
  const Component = variant || 'h2';

  const headingClassName = match(variant, {
    h1: styles.h1,
    h2: styles.h2,
    h3: styles.h3,
    default: '',
  });

  return (
    <Component
      className={`${headingClassName} ${className || ''} ${
        decorated ? styles.decorated : ''
      }`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Heading;

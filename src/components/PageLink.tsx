import { HTMLProps } from 'react';

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };
const PageLink = ({className, active, disabled, children, ...otherProps}: Props) => {



    return (
        <a
            aria-current={active ? 'page' : undefined}
            {...otherProps}
        >
            {children}
        </a>
    );
};

export default PageLink;
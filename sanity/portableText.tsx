import { createPortableTextComponent } from 'next-sanity';
import { ReactNode } from 'react';
import config from './sanityConfig';

interface ExternalLinkProps {
	_type: 'span';
	_key: string;
	markKey: string;
	mark: {
		_key: string;
		_type: 'externalLink';
		href: string;
	};
	children: ReactNode;
}

const PortableText = createPortableTextComponent({
	...config,
	// Serializers passed to @sanity/block-content-to-react
	// (https://github.com/sanity-io/block-content-to-react)
	serializers: {
		marks: {
			externalLink: ({ children, mark: { href } }: ExternalLinkProps) => {
				return <a href={href}>{children}</a>;
			}
		}
	}
});

export default PortableText;

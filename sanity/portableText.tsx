import { createPortableTextComponent } from 'next-sanity';
import { ReactNode } from 'react';
import Fraction from '../components/generic/fraction';
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

interface FractionProps {
	_type: 'span';
	_key: string;
	children: string[];
	mark: 'fraction';
	markKey: 'fraction';
}

const PortableText = createPortableTextComponent({
	...config,
	// Serializers passed to @sanity/block-content-to-react
	// (https://github.com/sanity-io/block-content-to-react)
	serializers: {
		marks: {
			externalLink: ({ children, mark: { href } }: ExternalLinkProps) => {
				return <a href={href}>{children}</a>;
			},
			fraction: ({ children }: FractionProps) => {
				return <Fraction val={children[0]} />;
			}
		}
	}
});

export default PortableText;

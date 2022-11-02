'use client';

import type { PortableTextComponents, PortableTextMarkComponentProps, PortableTextProps } from '@portabletext/react';
import { PortableText as PortableTextComponent } from '@portabletext/react';
import type { PortableTextBlock, TypedObject } from '@portabletext/types';
import Link from 'next/link';
import Heading from './heading';

interface ExternalLinkProps {
	_type: string;
	href: string;
}

const portableTextComponents: PortableTextComponents = {
	block: {
		h1: ({ children }) => <Heading level={1}>{children}</Heading>,
		h2: ({ children }) => <Heading level={2}>{children}</Heading>,
		h3: ({ children }) => <Heading level={3}>{children}</Heading>,
		normal: ({ children }) => <p>{children}</p>
	},
	marks: {
		externalLink: ({ children, value }: PortableTextMarkComponentProps<ExternalLinkProps>) => {
			if (value) {
				const { href } = value;
				if (href.startsWith('/')) {
					return <Link href={href}>{children}</Link>;
				}
				return <a href={href}>{children}</a>;
			}
			return <span>{children}</span>;
		}
	}
};

export default function PortableText<B extends TypedObject = PortableTextBlock>(props: Exclude<PortableTextProps<B>, 'components'>) {
	return <PortableTextComponent {...props} components={portableTextComponents} />;
}

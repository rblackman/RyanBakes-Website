import { createPortableTextComponent } from 'next-sanity';
import config from './sanityConfig';

const PortableText = createPortableTextComponent({
	...config,
	// Serializers passed to @sanity/block-content-to-react
	// (https://github.com/sanity-io/block-content-to-react)
	serializers: {}
});

export default PortableText;

import { useMemo } from 'react';
import styled from 'styled-components';
import baseSpacing from '../../../../helpers/styled-components/baseSpacing';
import Tag from './tag';

interface Props {
	tags: string[];
}

const TagsList = styled.ul`
	padding-left: 0;
	display: flex;
	flex-flow: row wrap;
	margin: 0 0 clamp(5vh, ${baseSpacing(3)}, 50vh);

	li + li {
		margin-left: ${baseSpacing()};
	}
`;

export default function Tags({ tags }: Props) {
	const sorted = useMemo(() => tags.sort(), [tags]);
	return (
		<TagsList>
			{sorted.map((tag) => (
				<Tag tag={tag} key={tag} />
			))}
		</TagsList>
	);
}

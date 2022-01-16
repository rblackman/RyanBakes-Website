import { BiPurchaseTagAlt } from 'react-icons/bi';
import styled from 'styled-components';
import baseSpacing from '../../../../helpers/styled-components/baseSpacing';

interface Props {
	tag: string;
}

const TagListItem = styled.li`
	list-style: none;
`;

const TagLink = styled.a`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	color: ${({ theme }) => theme.colors.primary.text};
	text-decoration-color: transparent;

	&:hover,
	&:focus-visible {
		text-decoration-color: ${({ theme }) => theme.colors.secondary.color};
	}

	svg {
		width: 1.2rem;
		height: 1.2rem;
		margin-right: ${baseSpacing(0.125)};
		fill: ${({ theme }) => theme.colors.secondary.color};
	}

	span {
		font-size: 0.75rem;
	}
`;

export default function Tag({ tag }: Props) {
	return (
		<TagListItem>
			<TagLink href={`/tags/${tag.replace(' ', '-')}`}>
				<BiPurchaseTagAlt />
				<span> {tag}</span>
			</TagLink>
		</TagListItem>
	);
}

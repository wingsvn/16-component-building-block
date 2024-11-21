import { gql } from 'graphql-request';
import { hygraph } from '$lib/hygraph.js';

export async function load() {
	let query = gql`
		query Homepage {
			cardSlides {
				titleCard
				paragraphCard
				paragraphCard2
				imageCard {
					url
				}
				imageCardAltText
			}
		}
	`;

	const data = await hygraph.request(query);
	return data;
}

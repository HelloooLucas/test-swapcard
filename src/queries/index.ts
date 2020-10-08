import { gql } from '@apollo/client';

export const SEARCH_ARTISTS = gql`
	query Artists($query: String!) {
		search {
			artists(query: $query) {
				nodes {
					id
					name
					mediaWikiImages {
						url
					}
				}
			}
		}
	}
`;

export const FIND_ARTIST = gql`
	query SingleArtist($id: ID!) {
		node(id: $id) {
			... on Artist {
				id
				name
				mediaWikiImages {
					url
				}
				releases {
					nodes {
						id
						title
						coverArtArchive {
							front
						}
					}
				}
			}
		}
	}
`;

export const FIND_ALBUM = gql`
	query SingleAlbum($id: ID!) {
		node(id: $id) {
			... on Release {
				id
				title
				date
				coverArtArchive {
					front
				}
			}
		}
	}
`;

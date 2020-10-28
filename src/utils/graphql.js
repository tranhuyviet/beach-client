import { gql } from '@apollo/client';

// GET ALL BEACHES
export const GET_BEACHES_QUERY = gql`
    query getBeaches($city: [String], $forDogs: String, $winterSwimming: String) {
        getBeaches(city: $city, forDogs: $forDogs, winterSwimming: $winterSwimming) {
            name
            lat
            lon
            address
            city
            forDogs
            winterSwimming
        }
    }
`;

// GET BEACH BY NAME
export const GET_BEACHE_BY_NAME_QUERY = gql`
    query getBeach($name: String!) {
        getBeach(name: $name) {
            name
            lat
            lon
            address
            city
            forDogs
            winterSwimming
            reviews {
                name
                comment
                rating
                createdAt
            }
            ratingAverage
            data {
                temp_air
                temp_water
                time
            }
        }
    }
`;

// CREATE NEW REVIEW
export const CREATE_REVIEW_MUTATION = gql`
    mutation createReview($name: String!, $comment: String!, $rating: Float!, $beachName: String!) {
        createReview(name: $name, comment: $comment, rating: $rating, beachName: $beachName) {
            name
            reviews {
                name
                comment
                rating
                createdAt
            }
            ratingAverage
        }
    }
`;

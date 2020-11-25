import { gql } from '@apollo/client';

// GET ALL BEACHES
export const GET_BEACHES_QUERY = gql`
    query getBeaches(
        $city: [String]
        $forDogs: String
        $winterSwimming: String
        $shower: String
        $toilet: String
        $restaurant: String
        $children: String
        $changing: String
        $guard: String
        $fitness: String
        $sport: String
        $kiosk: String
        $sauna: String
        $temp: Int
        $noAlgae: String
    ) {
        getBeaches(
            city: $city
            forDogs: $forDogs
            winterSwimming: $winterSwimming
            shower: $shower
            toilet: $toilet
            restaurant: $restaurant
            children: $children
            changing: $changing
            guard: $guard
            fitness: $fitness
            sport: $sport
            kiosk: $kiosk
            sauna: $sauna
            temp: $temp
            noAlgae: $noAlgae
        ) {
            name
            lat
            lon
            address
            city
            forDogs
            winterSwimming
            shower
            toilet
            restaurant
            children
            changing
            guard
            fitness
            sport
            kiosk
            sauna
            temp
            noAlgae
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
            shower
            toilet
            restaurant
            children
            changing
            guard
            fitness
            sport
            kiosk
            sauna
            temp
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
            info
            hslUrl
            mapsUrl
            sighting {
                distance
                date
                text
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

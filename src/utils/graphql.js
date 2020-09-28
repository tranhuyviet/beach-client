import { gql } from '@apollo/client';

// GET ALL BEACHES
export const GET_BEACHES_QUERY = gql`
    query getBeaches {
        getBeaches {
            name
            lat
            lon
        }
    }
`;

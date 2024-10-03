import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBeer } from "../../interfaces/beer.interface";
import { PaginationRequest } from "./pagination.interface";

export const beerAPI =createApi({
    reducerPath: 'beerAPI',
    baseQuery: fetchBaseQuery({baseUrl: ' https://api.openbrewerydb.org/v1/'}),
    tagTypes: ['Beer'],
    endpoints: (builder) => ({
        fetchAllBears: builder.query<IBeer[], PaginationRequest>({
            query: (paginationRequest) => ({

                url: 'beers',
                params: paginationRequest,
            }),
        }),
    }),
});



export const {useFetchAllBearsQuery} = beerAPI
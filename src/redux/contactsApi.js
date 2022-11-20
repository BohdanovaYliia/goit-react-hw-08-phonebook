import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6378d7ab7eb4705cf275ba24.mockapi.io/api/v1/',
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => 'contacts',
            providesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
            query: newContact => ({
                url: 'contacts',
                method: "POST",
                body: newContact,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
           query: id => ({
                url: `contacts/${id}`,
                method: 'DELETE',
           }),
           invalidatesTags: ['Contacts'],
        })
    }),
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;
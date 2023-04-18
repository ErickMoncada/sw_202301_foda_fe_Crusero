import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '../store';
const {VITE_APP_API_BASE_URL, VITE_APP_API_KEY} = import.meta.env;
export const desApi = createApi({
  reducerPath: 'desApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${VITE_APP_API_BASE_URL}/destinos`,
    prepareHeaders: (headers, { getState })=>{
      const token = (getState() as RootState).sec.token;
      headers.set('apikey', VITE_APP_API_KEY||'');
      headers.set('Authorization', `Bearer ${token}` )
    }
  }),
  tagTypes: ["Destinos"],
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => ({
        url: 'all'
      }),
      providesTags: ["Destinos"]
    }),
    getById: builder.query({
      query: (id) => ({
        url: `byid/${id}`
      }),
      providesTags: ["Destinos"]
    }),
    addNew: builder.mutation({
      query: (des:{_id:string, pais:string, status:string,fechaComienzo:string}) => (
        {
          url: 'new',
          method: 'POST',
          body: des
        }),
      invalidatesTags: ["Destinos"]
    }),
    upd: builder.mutation({
      query: (des:{_id:string, pais:string, status:string,fechaComienzo:string}) => (
        {
          url: `upd/${des._id}`,
          method: 'PUT',
          body: des
        }),
      invalidatesTags: ["Destinos"]
    }),
    delete: builder.mutation({
      query: (des:{_id:string}) => (
        {
          url: 'del/:id',
          method: 'DELETE',
          params: des
        }),
      invalidatesTags: ["Destinos"]
    })
  })
});

export const {useGetAllQuery, useGetByIdQuery, useAddNewMutation, useUpdMutation, useDeleteMutation} = desApi;

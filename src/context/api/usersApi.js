import { api } from '../api/index'

export const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        // Get request
        getUser: build.query({
            query: (params) => ({
                url: '/users',
                params
            }),
            providesTags: ["User"]
        }),
        // Post request
        createUser: build.mutation({
            query: (body) => ({
                url: "/auth/sign-up",
                method: "POST",
                body
            }),
            invalidatesTags: ["User"]
        }),
        // Patch request
        updateUser: build.mutation({
            query: ({ id, body }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ["Product"]
        }),
        // Delete request
        deleteUser: build.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["User"]
        })
    }),
})

export const {
    useGetUserQuery,
    useCreateUserMutation,
    useDeleteUserMutation,
    useUpdateUserMutation,
} = userApi
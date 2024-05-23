import { api } from '../api/index'

export const categoryApi = api.injectEndpoints({
    endpoints: (build) => ({
        // Get request
        getCategory: build.query({
            query: (params) => ({
                url: '/category',
                params
            }),
            providesTags: ["Category"]
        }),
        // Post request
        createCategory: build.mutation({
            query: (body) => ({
                url: "/category/create",
                method: "POST",
                body
            }),
            invalidatesTags: ["Category"]
        }),
        // Patch request
        updateCategory: build.mutation({
            query: ({ id, body }) => ({
                url: `/category/update/${id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ["Category"]
        }),
        // Delete request
        deleteCategory: build.mutation({
            query: (id) => ({
                url: `/category/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Category"]
        })
    }),
})

export const {
    useGetCategoryQuery,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useUpdateCategoryMutation
} = categoryApi
import { api } from '../api/index'

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        // Get request
        getProducts: build.query({
            query: (params) => ({
                url: '/products',
                params
            }),
            providesTags: ["Product"]
        }),
        // Post request
        createProduct: build.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body
            }),
            invalidatesTags: ["Product"]
        }),
        // Patch request
        updateProduct: build.mutation({
            query: ({ id, body }) => ({
                url: `/products/${id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ["Product"]
        }),
        // Delete request
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Product"]
        })
    }),
})

export const {
    useGetProductsQuery,
    useDeleteProductMutation,
    useCreateProductMutation,
    useUpdateProductMutation
} = productApi
import { api } from '../api/index'

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: (params) => ({
                url: '/products',
                params
            }),
            providesTags: ["Product"]
        }),
        createProduct: build.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body
            }),
            invalidatesTags: ["Product"]
        }),
        updateProduct: build.mutation({
            query: ({ id, body }) => ({
                url: `/products/${id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ["Product"]
        }),
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
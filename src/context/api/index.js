import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    // Asosiy API URL
    baseUrl: "https://ecommerceapi.firdavsdev.uz",
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("token")
        if (token) {
            // Har so'rovda mana shu token headersda qo'shib jo'natiladi
            headers.set('authentication', `${token}`)
        }
        return headers
    },
})

// Qayta urinish soni
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
    reducerPath: 'mainApi',
    baseQuery: baseQueryWithRetry,
    tagTypes: ["Product", "Category", "User"], // O'zgarish bo'lganda qayta fetch qilish uchun Tag Typelar
    endpoints: () => ({}),
})
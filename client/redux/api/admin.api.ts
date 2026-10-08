import { adminLogin, common_response } from '@/type/admin';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminAPi = createApi({
    reducerPath: 'adminAPi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/admin", credentials: 'include'
    }),
    endpoints: (builder) => {
        return {
            adminLogin: builder.mutation<common_response, adminLogin>({
                query: (userdata) => {
                    return {
                        url: '/adminLogin',
                        method: 'POST',
                        body: userdata
                    }
                },
            }),

            adminLogout: builder.mutation<common_response, void>({
                query: () => {
                    return {
                        url: '/adminLogout',
                        method: 'POST',
                    }
                },
            }),

        }
    }
});

export const { useAdminLoginMutation, useAdminLogoutMutation } = adminAPi;
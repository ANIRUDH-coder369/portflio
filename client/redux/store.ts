import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { adminAPi } from './api/admin.api';

const reduxStore = configureStore({
    reducer: {
        [adminAPi.reducerPath]: adminAPi.reducer,
    },
    middleware: (def) => def().concat(adminAPi.middleware)
});

export type RootType = ReturnType<typeof reduxStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;

export default reduxStore;
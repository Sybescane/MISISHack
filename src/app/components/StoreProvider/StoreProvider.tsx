"use client"

import { createReduxStore } from "@/app/lib/redux";
import { Provider } from "react-redux";

export default function StoreProvider({children}: {children: React.ReactNode}) {
    const store = createReduxStore()

    return <Provider store={store}>{children}</Provider>
}
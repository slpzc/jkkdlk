'use client'

import {Provider} from "react-redux";
import {store} from './store'
import MapComponent from "@/app/components/Map";
import styled from "styled-components";

const PageContent = styled.main`
  z-index: 2;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`

interface IChildrenProps {
    children: React.ReactNode
}

const InitializeApp = ({ children } : IChildrenProps) => {
    return (
        <>
            <PageContent className='page-content'>
                {children}
            </PageContent>
            <MapComponent/>
        </>
    )
};
export function Providers({ children }: IChildrenProps){
    return (
        <Provider store={store}>
                <InitializeApp>
                    { children }
                </InitializeApp>
        </Provider>
    )
}


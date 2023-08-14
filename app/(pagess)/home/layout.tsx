import React from 'react';
import {PageModule} from "@/app/(pagess)/home/PageModule";
import './news/page'
import './profile/page'

const Layout = ({
                    children,
                }: {
    children: React.ReactNode;
}) => {
    return (
        <PageModule>
            {children}
        </PageModule>
    );
};

export default Layout;
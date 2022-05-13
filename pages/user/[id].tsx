import React from 'react';
import { dehydrate, useQuery } from 'react-query';
import { Grid } from '@mantine/core';

import { queryClient, getUserById } from '../../src/api';

export async function getServerSideProps({ params }) {
    await queryClient.prefetchQuery("user", () => getUserById({ id: params.id }));
    return {
        props: {
            id: params.id,
            dehydratedState: dehydrate(queryClient)
        }
    }
}
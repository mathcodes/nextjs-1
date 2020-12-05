import React from 'react';
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter()
// router.query is an object with any associated params
    const { id } = router.query 

    return (
        <h1>
        Note { id }
        </h1>
    )

}

export default Page
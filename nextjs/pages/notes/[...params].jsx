import React from 'react';
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter()
// router.query is an object with any associated params

// /notes/1/2/3/4
    const { params } = router.query 
    console.log(params)
    return (
        <h1>
        Note
        </h1>
    )

}

export default Page
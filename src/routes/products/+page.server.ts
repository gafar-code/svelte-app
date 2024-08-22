import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
    console.log("Server side load")
    const res = await fetch('https://dummyjson.com/products')
    const products = (await res.json()).products

    const { user } = await parent()
    console.log(user)

    return {
        products: products,
        title: 'Products',
        description: 'All products'
    }
}
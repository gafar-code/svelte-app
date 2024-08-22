import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
    console.log("Server side load")
    const products = fetch('https://dummyjson.com/products').then(res => res.json().then(data => data.products))
    const { user } = await parent()
    console.log(user)

    return {
        products: products,
        title: 'Products',
        description: 'All products'
    }
}
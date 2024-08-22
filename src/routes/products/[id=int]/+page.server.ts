import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params }) => {
    const { id } = params

    console.log("Server side load")
    const res = await fetch('https://dummyjson.com/products/' + id)
    const product = await res.json()

    if (!product.id) {
        throw redirect(302, '/products')
    }

    return {
        product: product
    }
}
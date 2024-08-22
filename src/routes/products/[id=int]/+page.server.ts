import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params }) => {
    const { id } = params

    let title = 'Product'
    let description = 'Product description'

    console.log("Server side load")
    const product = fetch('https://dummyjson.com/products/' + id).then(res => res.json().then((data) => {
        if (!data) {
            throw redirect(302, '/products')
        }

        title = data.title
        description = data.description

        console.log(data.title)

        return data
    }))

    return {
        product: product,
        title: title,
        description: description,
    }
}
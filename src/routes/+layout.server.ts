import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
    const user = {
        name: 'John Doe',
        email: 'n9p0T@example.com'
    }
    return {
        user: user
    }
}
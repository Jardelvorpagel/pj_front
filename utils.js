//frontend/utils.js
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
async function fetchQuery(path, params = null) {
    let url
    if (params !== null) {
        url = `${baseUrl}/${path}/${params}`
    } else {
        url = `${baseUrl}/${path}`
    }
    const response = await fetch(`${url}`)
    console.log(response.status)

    if (response.status === 204) {
        return null
    }

    if (response.status === 404) {
        return null
    }

    const data = await response.json()
    return data
}
export { baseUrl, fetchQuery }
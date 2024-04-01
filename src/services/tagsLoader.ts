import axios from "axios"

export const tagsLoader = async () => {
    const data = await axios(
        'https://api.stackexchange.com/2.3/tags?&page=1&pagesize=50&order=desc&sort=popular&site=stackoverflow&include=tag.last_activity_date', {
        headers: {
            'Content-Type': 'application/json'
        },
    })
    
    return data
}
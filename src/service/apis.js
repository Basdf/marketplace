import Axios from "axios"

const Urls = [

    ["BlackStore", "http://blackstorenetcore.eba-py2kgy33.us-east-1.elasticbeanstalk.com/api/"],
    ["django_api", "http://production.eba-2veq4gdy.us-west-2.elasticbeanstalk.com/django_api/"],
    ["zoco de oro", "https://yurgqjbmwb.execute-api.us-east-2.amazonaws.com/dev/api/"]
]

export const searchItems = (query) => {
    var array = []
    for (var url of Urls) {
        url = Url[1].concat(`search?q=${query}`)
        let response = await Axios.get(url).catch(() => { })
        if (response)
            array = [...array, response.data]
    }
    return array
}

export const itemDetail = (id, seller) => {
    var url
    url = Urls.filter(Url => Url[0] === seller)
    url = url[0][1].concat(`item/${id}`)
    let response = await Axios.get(url).catch(() => { })
    return response
}

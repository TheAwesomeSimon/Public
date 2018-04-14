const apiKey = '8lbxEaUlhUfWI_8d2OdFhwM4BiFm1TcJo48WBqQ9KalGxs0awA7fp3vGK53fQsPLpfpavRci7qqpfT_uoQ_ZxPzb_1MxL104nRIBm2uLRmS3oqOq5RddOdFf0mvSWnYx';

export const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?
        term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers:{
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
};

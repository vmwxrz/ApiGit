export const getImg = async(NomCad) =>{    
    
    let url =  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(NomCad)}&limit=10&api_key=FSagm3UuEgqfNk8F0b5nJfspkHqscdbO`;    
        const rspuesta = await fetch(url);
        const { data } = await rspuesta.json();
    
        return data.map(v=>{
            return{
                id: v.id,
                Title: v.title,
                Url: v.images.downsized_medium.url
            }
        });  
    } 
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=x7pmsE4icH6Ldnbb5f8wqx4sMryfvYRf&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    return gifs;

}
async function getImageByURL(url: string, params: {[key: string]: any}){
    let response = await fetch(url, params);
    let data = await response.blob();
    let metadata = {
        type: 'image/jpeg'
    };
    const file = new File([data], `${url}.jpg`, metadata);
    console.log(file)
    return file;
    
}
export {getImageByURL}
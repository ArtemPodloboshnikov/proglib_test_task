export enum TypeFetchTypes {

    POST = 'post',
    GET = 'get',
    PUT = 'put'
}

export async function fetching (request: string, params: {[key: string]: string}, type: TypeFetchTypes = TypeFetchTypes.GET)
{
    let response = {

        res: {},
        err: ''
    }

    try{
        
        params.method = type;
        const req = await fetch(request, params);
        const res = await req.json();

        response.res = res;
        return response;
    }
    catch (e: any)
    {
        response = { res: {}, err: e.message}
        return response
    }
}
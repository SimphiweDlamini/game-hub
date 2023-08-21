import platforms from '../data/platform'

interface Platform{
    id:number;
    name:string;
    slug:string;
}

const usePlatforms =()=>({data:platforms,isLoading:false,error:null})

export default usePlatforms;
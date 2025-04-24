import Cookies from 'universal-cookie';

const cookies = new Cookies() ;

class CookiServise  {
    get(name:string) {
        return cookies.get(name)
    }
    set(name:string , value:string , optaion:{}) {
        return cookies.set(name , value , optaion)
    }
    remve(name:string) {
        return cookies.remove(name)
    }
}

export default new CookiServise()
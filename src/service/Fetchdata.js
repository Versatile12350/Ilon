export default class Fetchdata {

    getResource = async url => {

        startUrl ='https://api.spacexdata.com/v4'

        const res = await fetch(url);

        if (!res.ok){
            throw new Error(`Произошла ошибка ${res.status}`)
        }

        return await res.json();

    };

    getRocket = async () => await this.getResource(this.startUrl + 'rockets');

    getLaunches= async () => await this.getResource(this.startUrl + 'launches/past');

    getCompony= async () => await this.getResource(this.startUrl + 'company');
}
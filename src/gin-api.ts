import { RESTDataSource } from '@apollo/datasource-rest';

export class GinAPI extends RESTDataSource { 
    override baseURL = 'https://longtail-api-production.up.railway.app/';
    async BusRoute(bs_id: string | number ) {
      return this.get(`bus_routes_from_bus_id/${encodeURIComponent(bs_id)}`);
    }
    async MapMarkers(lat: string | number, long: string | number, deltalat: string | number, deltalong: string | number) {
      return this.get(`map_markers?lat=${encodeURIComponent(lat)}&long=${encodeURIComponent(long)}&deltalat=${encodeURIComponent(deltalat)}&deltalong=${encodeURIComponent(deltalong)}`);
    }
    async NearbyRouteCard(lat: string | number, long: string | number, n: string | number) {
      return this.get(`nearby_bus_stops?lat=${encodeURIComponent(lat)}&long=${encodeURIComponent(long)}&n=${encodeURIComponent(n)}`);
    }
}


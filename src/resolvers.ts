const resolvers = {
    Query: {
      MapMarkers: async (_, { lat, long, deltalat, deltalong }, { dataSources }) => {
        return dataSources.ginapi.MapMarkers(lat, long, deltalat, deltalong);
      },
      NearbyRouteCard: async (_, { lat, long, n }, { dataSources }) => {
        return dataSources.ginapi.NearbyRouteCard(lat, long, n);
      },
    },
    busStop : {
      bus_route: async (parent, _, { dataSources }) => {
        return dataSources.ginapi.BusRoute(parent.bs_id);
      }
    }
  };

export {resolvers}

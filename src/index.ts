import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { GinAPI } from './gin-api.js'
import { resolvers } from './resolvers.js'

const typeDefs = `#graphql
  type Query {
    MapMarkers(lat:Float!, long:Float!, deltalat: Float!, deltalong: Float!): [busStop]
    NearbyRouteCard(lat:Float!, long:Float!, n:Int!): [busStop!]
  }

  type busStop {
    bs_id: Int!
    name: String!
    cross_street1: String!
    cross_street2: String!
    latitude: Float!
    longitude: Float!
    bus_route: [busRoute!]
  }

  type busRoute {
    br_id: Int!
    route_name: String!
    start_bs_id: String!
    end_bs_id: String!
    arrival_time: String!
    mins_to_arrival: String!
  }
`;

interface ContextValue {
  dataSources: {
    ginapi: GinAPI;
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
     const { cache } = server;
    return {
      listen: { port: 4000 },
      dataSources: {
        ginapi: new GinAPI({ cache }),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
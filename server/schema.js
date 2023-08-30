const typeDefs = `
  type Routine {
    id: Int!
    title: String
    description: String
  }
  type Query {
    routines: [Routine]
  }
  type Mutation {
    addRoutine(title: String!, description: String!): Routine
    deleteRoutine(id: Int!): Boolean
  }
`;

export default typeDefs;
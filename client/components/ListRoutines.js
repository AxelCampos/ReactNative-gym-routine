import { gql, useQuery } from '@apollo/client';
import { Text, View } from 'react-native';

const GET_ROUTINES = gql`
  query GetRoutines {
    routines {
        title
        description
    }
  }
`;

export default function ListRoutines() {
    const {loading, error, data} = useQuery(GET_ROUTINES)

    if (loading) return <Text>Loading ...</Text>
    if (error) return <Text>Hubo algún tipo de error al recuperar las rutinas, prueba más tarde</Text>

    return (
      <View>
        {data.routines.map(item => {
          return (
            <View key={item.id}>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          );
        })}
      </View>
      
    )
}
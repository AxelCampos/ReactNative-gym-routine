const routines = [
    {
      id: 1,
      title: 'Biceps-Triceps',
      description: 'Dia de biceps y triceps',
    },
    {
      id: 2,
      title: 'Pierna',
      description: 'Dia de pierna',
    },
];

const resolvers = {
    Query: {
      routines: () => routines,
    },
    Mutation: {
        addRoutine: (_, {title, description}) => {
            const newRoutine = {
                id: routines.length + 1,
                title,
                description
            }

            routines.push(newRoutine);
            return newRoutine;
        },
        deleteRoutine: (_ , {id}) => {
            const index = routines.findIndex(routine => routine.id === id)
            if (index === -1) return false;
            
            routines.splice(index, 1);
            
            return true;
        }
    }
};

export default resolvers;
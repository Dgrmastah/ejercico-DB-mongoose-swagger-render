module.exports = {
    schemas: {
      Task: {
        type: 'object',
        required: ['title'],
        properties: {
          title: {
            type: 'string',
            description: 'El título de la tarea',
          },
          completed: {
            type: 'boolean',
            description: 'Estado de la tarea',
          },
        },
      },
    },
  };
  
module.exports = {
    paths: {
      '/create': {
        post: {
          summary: 'Crear una tarea',
          operationId: 'createTask',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Task',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Tarea creada correctamente',
            },
          },
        },
      },
      '/': {
        get: {
          summary: 'Obtener todas las tareas',
          operationId: 'getAllTasks',
          responses: {
            '200': {
              description: 'Lista de tareas',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Task',
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/id/{_id}': {
        put: {
          summary: 'Actualizar tarea',
          operationId: 'updateTask',
          parameters: [
            {
              in: 'path',
              name: '_id',
              required: true,
              description: 'ID de la tarea',
              schema: {
                type: 'string',
              },
            },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    title: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Tarea actualizada',
            },
          },
        },
        delete: {
          summary: 'Eliminar tarea',
          operationId: 'deleteTask',
          parameters: [
            {
              in: 'path',
              name: '_id',
              required: true,
              description: 'ID de la tarea',
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            '200': {
              description: 'Tarea eliminada',
            },
          },
        },
      },
    },
  };
  
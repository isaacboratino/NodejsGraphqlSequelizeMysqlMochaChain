import { graphql } from 'graphql';
import { schema } from '../../api/controllers/schemaGraphQL';
import { Usuario } from '../../api/models/Acesso/Usuario/Usuario';

it('teste bobo para ver como se testa', async () => {
  //language=GraphQL
  const query = `
    query Q {
      viewer {
        me {
          name
        }
      }
    }
  `;

  const result = graphql(schema, query);
  const { data } = result;

  expect(null).toBe(null);
});

it('outro teste bobo', async () => {
  //language=GraphQL
  const query = `
    query Q {
      viewer {
        me {
          name
        }
      }
    }
  `;

  const result = graphql(schema, query);
  const { data } = result;

  expect(data.viewer.me).toBe(null);
});
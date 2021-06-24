// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './product'
import customer from './customer'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'order',
      title: 'Order',
      type: 'document',
      fields: [
        {
          title: 'Order Id',
          name: 'orderId',
          type: 'string',
        },
        {
          title: 'Order Date',
          name: 'orderDate',
          type: 'datetime',
        },
        {
          title: 'Customer',
          name: 'customer',
          type: 'customer',
        },
        {
          title: 'Products',
          name: 'products',
          type: 'array',
          of: [
            {
              type: 'product'
            }
          ]
        }
      ]   
    },
    product,
    customer
  ]),
})

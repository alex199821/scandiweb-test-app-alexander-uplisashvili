export const ALL_ATTRIBUTES = `
query {
    categories {
     name
     products {
       id
       name
       inStock
       gallery
       description
       category
       attributes {
         id
         name
         type
         items {
           displayValue
           value
           id
         }
       }
       prices {
         currency {
           label
           symbol
         }
         amount
       }
       brand
     }
   }
 }
`;

## Talent Pro Assignment

### Please Read
I received an email form Talent Pro to do a assignment at 3:47pm Jun 13, 2022 with a deadline before Jun 17, 2022. 

Besides this assignment I had a verbal challenge from interview to use graphql CRUD operation with MongoDB. Assignment app suggestes to use MERN/Next.js

GraphQL, Node and Express is entirely new to me. To do this assignment I have given efforts to learn this vast technologies first in very short priod of time then do the job. Therefore the assignment is partially completed, even with my little satisfaction. I am entirely happy what I have doen with GraphQL and developing a GraphQL server with Node.js and Exprees framework and fetching data using Apollo Client hooks but I am not happy with project flow UI, Ux, form validations which are not so good for short preoid of time. Also I couldn't find enough time to focush on design and Vedio uploading part. 

I think you know it very well, with a very short time (approx 3 days) the assignmet is deficult to complete with zero experience with GraphQL, Node and Expess.

I am Lefting the .env file as it is with MONGO_DB_URI string. I used MongoDB cloud service Atlas to do the projcet. If you want to see the document changing please update the connection string MONGO_DB_URI with yours or ask for login credentials.

### How to Examine
To examien the project please nevigate to the project root folder

First, install the project dependencies with npm or yarn

```bash
yarn install
```

Second, run the GraphQL server:

```bash
yarn start-gql
```

Open [http://localhost:4000/api/graphql](http://localhost:4000/api/graphql) with your browser to see the result. These will open Apollo Server for intarect with GraphQL API using their tools.

#### Example Query

**Operation**
```bash
mutation AddUser($inputUser: InputUser!) {
  addUser(inputUser: $inputUser)
}
```

**Variables**
```bash
{
  "inputUser": {
    "firstName": "Asraful",
    "lastName": "kadir",
    "email": "kadir@gmail.com",
    "password": "3",
    "videos": [
      {
        "title": "Nice Dog",
        "category": "dog",
        "tags": ["dog","animal"],
        "url": "videos/dog.mp4",
      }
    ]
  }
}
```

Third, run the Next.js development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Suggestions for improvement
Besides Video Posting considering fields (Title, Category, Tags, Video file upload), Video Listing/Edit/Delete, User Manage (CRUD) a Fan Fare project has may features for improvements like -
Video share, like, comments.
User follows, geting credites, user rating.
Product buying, buying with credites.
Product review and rating. 
A blog section can be added.
Arranging contest with prize and many more like this.


**Thanks**
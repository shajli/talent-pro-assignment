const { ObjectId } = require('mongodb');

const resolvers = {
  Query: {
    async users(parent, args, context, info) {
      const result = await context.db.collection('users').find().toArray();
      return result;
    },
    async user(parent, args, context, info) {
      const _id = new ObjectId(args._id);
      const filter = { _id };
      const result = await context.db.collection("users").findOne(filter);
      return result;
    }
  },
  Mutation: {
    async addUser(parent, args, context, info) {
      const inputUser = args.inputUser;
      const document = {
        ...inputUser,
      };
      const result = await context.db.collection('users').insertOne(document);

      if (result.acknowledged) return 'User Added';
      else return 'User Adding Failed';
    },
    async updateUser(parent, args, context, info) {
      const _id = new ObjectId(args._id);
      const filter = { _id };
      const inputUser = args.inputUser;

      const updateDocument = {
        $set: {
          ...inputUser,
        },
      };

      const result = await context.db
        .collection('users')
        .updateOne(filter, updateDocument);

      if (result.acknowledged) return 'User updated';
      else return 'User updating Failed';
    },
    async deleteUser(parent, args, context, info) {
      const _id = new ObjectId(args._id);
      const query = { _id };

      const result = await context.db.collection('users').deleteOne(query);

      if (result.deletedCount === 1) return 'User deleted';
      else return 'User deleting failed';
    },
  },
};

module.exports = {
  resolvers,
};

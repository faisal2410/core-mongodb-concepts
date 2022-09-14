/**
Some important resource links:
1. cheat sheet
https://gist.github.com/codeSTACKr/53fd03c7f75d40d07797b8e4e47d78ec?permalink_comment_id=4099801&fbclid=IwAR26sb4qNuaOsRnRGAcRcrOqkYtQ3ENue5npufCxfeBIEWEpVvS8dMf6PHc

2. Cheat sheet
https://www.interviewbit.com/mongodb-cheat-sheet/?fbclid=IwAR1F3Ozw8uQWuexDc0gkqLpAjxy5diyHdYaNCRRJ5zZrDBouW-aUR2jylWA

3.https://www.mongodb.com/try/download/database-tools?fbclid=IwAR38WlfmtsXwxuu6xHq56BtRow5Rp5iXH319YfrCZHVwPKD79MM-qIb_ULQ

4. https://www.mongodb.com/products/shell?fbclid=IwAR2sI0kbw-GhQAm8Mr0Fermn76INt_4wama-wKwxDkoKOy2mrid_AYIE37k


5.https://www.mongodb.com/try/download/community?fbclid=IwAR26sb4qNuaOsRnRGAcRcrOqkYtQ3ENue5npufCxfeBIEWEpVvS8dMf6PHc


*/

/**
Important Commands
1. Check monosh Version
mongosh --version

2.start the Mongo Shell
mongosh "YOUR_CONNECTION_STRING" --username YOUR_USER_NAME

3. Show Current Database
db

4. Show All Databases
show dbs

5. Create Or Switch Database
use blog

6. Drop Database
db.dropDatabase()

7. Create Collection
db.createCollection('posts')

8. Show Collections
show collections

9.Insert Document
db.posts.insertOne({
  title: 'Post 1',
  body: 'Body of post.',
  category: 'News',
  likes: 1,
  tags: ['news', 'events'],
  date: Date()
})

10.Insert Multiple Documents
db.posts.insertMany([
  {
    title: 'Post 2',
    body: 'Body of post.',
    category: 'Event',
    likes: 2,
    tags: ['news', 'events'],
    date: Date()
  },
  {
    title: 'Post 3',
    body: 'Body of post.',
    category: 'Tech',
    likes: 3,
    tags: ['news', 'events'],
    date: Date()
  },
  {
    title: 'Post 4',
    body: 'Body of post.',
    category: 'Event',
    likes: 4,
    tags: ['news', 'events'],
    date: Date()
  },
  {
    title: 'Post 5',
    body: 'Body of post.',
    category: 'News',
    likes: 5,
    tags: ['news', 'events'],
    date: Date()
  }
])

11.Find All Documents
db.posts.find()

12. Find Documents with Query
db.posts.find({ category: 'News' })

13.Sort Documents
Ascending
db.posts.find().sort({ title: 1 })

Descending
db.posts.find().sort({ title: -1 })

14.Count Documents
db.posts.find().count()
db.posts.find({ category: 'news' }).count()

15.Limit Documents
db.posts.find().limit(2)

16.Chaining
db.posts.find().limit(2).sort({ title: 1 })

17.Find One Document
db.posts.findOne({ likes: { $gt: 3 } })

18.Update Document
db.posts.updateOne({ title: 'Post 1' },
{
  $set: {
    category: 'Tech'
  }
})

19.Update Document or Insert if not Found
db.posts.updateOne({ title: 'Post 6' },
{
  $set: {
    title: 'Post 6',
    body: 'Body of post.',
    category: 'News'
  }
},
{
  upsert: true
})

20.Increment Field ($inc)
db.posts.updateOne({ title: 'Post 1' },
{
  $inc: {
    likes: 2
  }
})

21.Update Multiple Documents
db.posts.updateMany({}, {
  $inc: {
    likes: 1
  }
})

22.Rename Field
db.posts.updateOne({ title: 'Post 2' },
{
  $rename: {
    likes: 'views'
  }
})
23. Delete a Document
db.posts.deleteOne({ title: 'Post 6' })

24.Delete Multiple Documents
db.posts.deleteMany({ category: 'Tech' })

25.Greater & Less Than
db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })





*/ 
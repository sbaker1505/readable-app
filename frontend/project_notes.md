# PROJECT NOTES

## Data
to be stored on the server

* Categories - fixed number - objects with name and url
  + Add a Category - add desired object to the Array in `categories.js`
* Posts - to include:

| Attribute | Type |	Description |
|----------|------|-------------|
|id	       | String	| Unique identifier |
|timestamp | Integer | Time created - default data tracks this in Unix time. You can use Date.now() to get this number |
|title | String | Post title |
|body | String | Post body |
|author | String | Post author |
|category | String | Should be one of the categories provided by the server |
|voteScore | Integer | Net votes the post has received (default: 1)
|deleted | Boolean | Flag if post has been 'deleted' (inaccessible by the front end), (default: false) |

* Comments - to include:

| Attribute | Type |	Description |
|----------|------|-------------|
| id	| String	| Unique identifier |
| parentId	| String	| id of the parent post |
| timestamp	| Integer	| Time created - default data tracks this in Unix time. You can use Date.now() to get this number |
| body	| String	| Comment body |
| author	| String	| Comment author |
| voteScore	| Integer	| Net votes the comment has received (default: 1) |
| deleted	| Boolean	| Flag if comment has been 'deleted' (inaccessible by the front end), (default: false) |
| parentDeleted	| Boolean	| Flag for when the the parent post was deleted, but the comment itself was not. |

## Views

* Default (Root)
  + List all categories
  + List all posts
  + Controls
    * Sort by Score & Time
    * Add new post
* Category View
  + List only posts in that category
* Post Detail View
  + Shows all info for Post
    * Title
    * Body
    * Author
    * Time
    * Score
  + List all Comments for post
  + Controls:
    * Edit or Delete Post
    * Add New comment with comment form (inline or modal)
      + Edit or Delete Comment
* Create/Edit View
  + Form to create new post or edit existing post
  + When editing, existing data should be pre populated in form

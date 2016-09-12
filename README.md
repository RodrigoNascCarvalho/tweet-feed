This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This application has the following features:
  - Given an username, the last 50 tweets will be loaded from the Twitter API;
  - Ordering functionality allows to work with tweets - ordering them by date and numbers of likes, both in ascending or descending order;
  - Filtering functionality through the combination of a different array of filters (Filter By: Date, Likes, Number of Mentions, Number of Likes, Mentions, Hashtags) combined with some operators (Operators: Equal to, Not equal to, Greater than, Less than, Includes Not Includes);
  - Statistics button that shows sum of likes, average of likes per tweet and list with number of mentions per user.

This is how the application looks like:
![Overview](http://i.imgur.com/L4m8pdW.png)

To run it, just type:

```
npm install
npm start
```


This project runs on port 3000. It's also absolutely necessary to have the [tweet-api](https://github.com/RodrigoNascCarvalho/tweet-api) project running together with this project on port 4000.

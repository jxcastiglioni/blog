import React from 'react';
import Blog from './components/Blog';
import Header from './components/Header';
import Entry from './components/Entry'

function App() {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const [likes, setLikes] = useState(0);
  const info = [
    {
      title: 'The Title of the Blog',
      author: 'Jacob Castiglioni',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'The Second Blog',
      author: 'Michael Hublot',
      body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      title: 'The Third Installment',
      author: 'Natalie Shinzer',
      body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    }
  ]

  const funcArr = [
    {
      addBlog: () => console.log('added blog'),
      newBlog: () => console.log('new blog created'),
      handleBlogChange: () => console.log('performed some process for blog change')
    }
  ]

  return (
    <div>
      <Header siteTitle="Jacob's Blog Site" />
      <Entry funcArray={funcArr} />
      {info.map(art => <Blog key={art.name} article={art} />)}
    </div>
  );
}

export default App;

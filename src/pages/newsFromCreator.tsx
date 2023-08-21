import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IUserById } from '@/interfaces';
import newsApi from '@/service/newsApiV2';
import { formatDate } from '@/utils/formatDate';

const NewsFromCreator = () => {
  const [usersData, setUsersData] = useState<IUserById | null>(null);
  const { id } = useParams();

  const findUserById = usersData?.users?.find((user) => user.id === id);
  const postsOfUser = findUserById?.posts.map((post) => (
    <div key={post.id} className="max-w-[350px]  flex-1 mx-auto p-2 m-2 rounded-md ">
      <p>
        <strong>Título:</strong> {post.title}
      </p>
      <p>
        <strong>Conteúdo:</strong> {post.content}
      </p>
      <p>
        <strong>Tema:</strong> {post.slug}
      </p>
      <p>
        <strong>Criado em:</strong> {formatDate(post.createdAt)}
      </p>
      <img className="w-full my-2 rounded-md" src={post.newsUrl[0]} alt={post.title} />
    </div>
  ));

  const getUserById = () => {
    newsApi
      .get(`/user`)
      .then((res) => setUsersData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserById();
    return () => {
      console.log();
    };
  }, [id]);

  return <h1 className="container mt-6 mx-auto flex gap-2 flex-wrap h-[75vh]">{postsOfUser}</h1>;
};

export default NewsFromCreator;

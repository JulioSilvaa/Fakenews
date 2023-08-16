import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import Input from '@/components/Input';
import newsApi from '@/service/newsApiV2';
import { standardizeImage } from '@/utils/renderImage';

type FormValues = {
  content: string;
  slug: string;
  title: string;
  file: FileList;
};

const CreateFakeNews = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();

  const formSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append('content', data.content);
    formData.append('slug', data.slug);
    formData.append('title', data.title);

    for (let i = 0; i < data.file.length; i++) {
      const standardizedImage = await standardizeImage(data.file[i]);
      if (standardizedImage) {
        formData.append('file', standardizedImage, data.file[i].name);
      }
    }

    newsApi
      .post(`/news`, formData)
      .then(() => navigate('/'))
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="max-w-[500px] h-screen  container mx-auto mt-9 flex-1 flex flex-col p-5"
    >
      <h1 className="text-center text-2xl font-sans">Adicionar nova FakNews</h1>
      <Input name="content" label="Conteudo" type="text" register={{ ...register('content') }} />
      <Input name="slug" label="Slug / Tema" type="text" register={{ ...register('slug') }} />
      <Input name="title" label="Título" type="text" register={{ ...register('title') }} />
      <Input
        name="images"
        label="Imagem"
        type="file"
        register={{ ...register('file') }}
        multiple
        maxLength={3}
      />

      <Button type="submit">Enviar</Button>
      <span className="mt-4 text-xs text-center">
        Já possui cadastro ? faça o
        <Link to="/login">
          <strong className="text-sm mx-1 text-red-600 cursor-pointer hover:underline">
            login
          </strong>
        </Link>
        e bora adicionar uma FAKENEWS
      </span>
    </form>
  );
};

export default CreateFakeNews;

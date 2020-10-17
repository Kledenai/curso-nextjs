import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  products: IProduct[];
}

export default function Home() {
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);

  useEffect(() => {

  }, []);

  return (
    <div>
      <section>
        <Title>Hello World</Title>
        {recommendedProducts.map(product => {
          return(
            <li key={product.id}>
              {product.title}
            </li>
          );
        })}
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended')
  const products = await response.json();

  return (
    props: {
      products
    }
  )
}

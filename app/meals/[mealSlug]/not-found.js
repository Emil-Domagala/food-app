import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <main className="not-found">
      <h1>Meal Not Found</h1>
      <p>Unfortunatly, we could not find requested page or meal data.</p>
      <p>
        Go back to <Link href={'/meals'}>All Meals</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;

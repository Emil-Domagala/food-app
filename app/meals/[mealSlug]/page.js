import { getMeal } from '@/lib/meals';
import classes from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata({params}){
    const { mealSlug } = await params;
    const meal = getMeal(mealSlug);

    if (!meal) {
      notFound();
    }
  
  return {
    title: meal.title,
    description: meal.summary,
  };
}

const MealPage = async ({ params }) => {
  const { mealSlug } = await params;
  const meal = getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            fill
            alt={meal.title}
            src={meal.image}
            sizes="width:100%"
          />
        </div>
        <div className={classes['header-text']}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <div
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}></div>
      </main>
    </>
  );
};

export default MealPage;

import Image from "next/image";
import Link from "next/link";

const RecipeItem = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="recipe--item">
      {/* <Link href="/recipe/id" as={`/recipe/${recipe.id}`}>
        <a>
          <h1>{recipe.title}</h1>
          <Image src={recipe.image} alt="" width={200} height={200} />
        </a>
      </Link> */}

      {/* <Link href={`/recipe/${recipe.id}`}>
        <a href="">
          <div className="recipe--wrapper">
            <Image
              className="recipe--image"
              src={recipe.image}
              alt="Recipe"
              layout="fill"
            />
          </div>
          <h1 className="recipe--item-title">{recipe.title}</h1>
        </a>
      </Link> */}
    </div>
  );
};
export default RecipeItem;

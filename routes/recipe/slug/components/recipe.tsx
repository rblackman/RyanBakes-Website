import ApplicationPage from '../../../../components/shared/applicatonPage';
import useRecipe from '../hooks/useRecipe';
import useUnits from '../hooks/useUnits';
import Ingredients from './ingredients';
import RecipeHero from './recipeHero';

function Recipe() {
	const recipe = useRecipe();
	const { ingredients } = recipe;
	return (
		<ApplicationPage page={recipe} hero={<RecipeHero recipe={recipe} />}>
			{ingredients && <Ingredients ingredients={ingredients} />}
		</ApplicationPage>
	);
}

Recipe.dataHooks = [useRecipe, useUnits, ...ApplicationPage.dataHooks];

export default Recipe;

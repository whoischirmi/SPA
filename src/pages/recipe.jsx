import { usestate, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/preloader";

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h3>{recipe.strMeal}</h3>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null }
                    <p>{recipe.strInstructions}</p>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingridient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* здесь ингридиенты не выводятся */}
                            {Object.keys(recipe).map((key) => {
                                if (key.includes("Ingridient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5 style={{ margin: "2rem 0 1.5rem"}}>Видео-рецепт</h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                allowfullscreen
                            />
                        </div>
                    ) : null}
                </div>
            )}
            <button className="btn" onClick={goBack}>
                Назад
            </button>
        </>
    );
}

export { Recipe };
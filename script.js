const formEl = document.querySelector(".header__form");
const divCocktailEl = document.querySelector(".cocktail__information");

const getCocktailRandom = async () => {
  divCocktailEl.innerHTML = "";
  try {
    const responseRandom = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );

    const getAndDisplayCocktail = (cocktail) => {
      const divSecondEl = document.createElement("div");
      divSecondEl.classList.add("cocktail__drink");

      const nameEl = document.createElement("h3");
      nameEl.classList.add("cocktail__name");
      nameEl.innerText = cocktail.strDrink;
      divSecondEl.appendChild(nameEl);

      const divThirdEl = document.createElement("div");
      divThirdEl.classList.add("cocktail__contents");
      divSecondEl.appendChild(divThirdEl);

      const divFourthEl = document.createElement("div");
      divThirdEl.appendChild(divFourthEl);

      const subheadingEl = document.createElement("p");
      subheadingEl.classList.add("cocktail__subheading");
      subheadingEl.innerText = "Ingredients of Cocktail";
      divFourthEl.appendChild(subheadingEl);

      const ulEl = document.createElement("ul");
      divFourthEl.appendChild(ulEl);

      const ingredientsAll = [
        cocktail.strIngredient1,
        cocktail.strIngredient2,
        cocktail.strIngredient3,
        cocktail.strIngredient4,
        cocktail.strIngredient5,
        cocktail.strIngredient6,
        cocktail.strIngredient7,
        cocktail.strIngredient8,
        cocktail.strIngredient9,
        cocktail.strIngredient10,
        cocktail.strIngredient11,
        cocktail.strIngredient12,
        cocktail.strIngredient13,
        cocktail.strIngredient14,
        cocktail.strIngredient15,
      ];
      const ingredientsUsed = [];
      ingredientsAll.filter((ingredient) => {
        if (ingredient !== null) {
          ingredientsUsed.push(ingredient);
        }
      });
      ingredientsUsed.forEach((ingredient) => {
        const ingredientsEl = document.createElement("li");
        ingredientsEl.classList.add("cocktail__ingredients");
        ingredientsEl.innerText = ingredient;
        ulEl.appendChild(ingredientsEl);
      });

      const divFifthEl = document.createElement("div");
      divThirdEl.appendChild(divFifthEl);

      const subheadingSecondEl = document.createElement("p");
      subheadingSecondEl.classList.add("cocktail__subheading");
      subheadingSecondEl.innerText = "Measurements of Cocktail";
      divFifthEl.appendChild(subheadingSecondEl);

      const ulSecondEl = document.createElement("ul");
      divFifthEl.appendChild(ulSecondEl);

      const measurementAll = [
        cocktail.strMeasure1,
        cocktail.strMeasure2,
        cocktail.strMeasure3,
        cocktail.strMeasure4,
        cocktail.strMeasure5,
        cocktail.strMeasure6,
        cocktail.strMeasure7,
        cocktail.strMeasure8,
        cocktail.strMeasure9,
        cocktail.strMeasure10,
        cocktail.strMeasure11,
        cocktail.strMeasure12,
        cocktail.strMeasure13,
        cocktail.strMeasure14,
        cocktail.strMeasure15,
      ];
      const measurementUsed = [];
      measurementAll.filter((measure) => {
        if (measure !== null) {
          measurementUsed.push(measure);
        }
      });
      measurementUsed.forEach((measure) => {
        const measureEl = document.createElement("li");
        measureEl.classList.add("cocktail__measurement");
        measureEl.innerText = measure;
        ulSecondEl.appendChild(measureEl);
      });

      const subheadingTwoEl = document.createElement("p");
      subheadingTwoEl.classList.add("cocktail__subheading");
      subheadingTwoEl.innerText = "Instructions to Create Cocktail";
      divSecondEl.appendChild(subheadingTwoEl);

      const instructionsEl = document.createElement("p");
      instructionsEl.classList.add("cocktail__instructions");
      instructionsEl.innerText = cocktail.strInstructions;
      divSecondEl.appendChild(instructionsEl);

      divCocktailEl.appendChild(divSecondEl);

      const hiddenEl = document.querySelector(".cocktail__heading--hidden");
      hiddenEl.classList.remove("cocktail__heading--hidden");
    };

    getAndDisplayCocktail(responseRandom.data.drinks[0]);
  } catch (error) {
    console.log(error);
  }
};
formEl.addEventListener("click", getCocktailRandom);

const selectionEl = document.querySelector("#cocktail");

const getCocktailChoice = async (event) => {
  divCocktailEl.innerHTML = "";
  const choice = event.target.value;

  try {
    const responseChoice = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`
    );

    const getAndDisplayCocktail = (cocktail) => {
      const divSecondEl = document.createElement("div");
      divSecondEl.classList.add("cocktail__drink");

      const nameEl = document.createElement("h3");
      nameEl.classList.add("cocktail__name");
      nameEl.innerText = cocktail.strDrink;
      divSecondEl.appendChild(nameEl);

      const divThirdEl = document.createElement("div");
      divThirdEl.classList.add("cocktail__contents");
      divSecondEl.appendChild(divThirdEl);

      const divFourthEl = document.createElement("div");
      divThirdEl.appendChild(divFourthEl);

      const subheadingEl = document.createElement("p");
      subheadingEl.classList.add("cocktail__subheading");
      subheadingEl.innerText = "Ingredients of Cocktail";
      divFourthEl.appendChild(subheadingEl);

      const ulEl = document.createElement("ul");
      divFourthEl.appendChild(ulEl);

      const ingredientsAll = [
        cocktail.strIngredient1,
        cocktail.strIngredient2,
        cocktail.strIngredient3,
        cocktail.strIngredient4,
        cocktail.strIngredient5,
        cocktail.strIngredient6,
        cocktail.strIngredient7,
        cocktail.strIngredient8,
        cocktail.strIngredient9,
        cocktail.strIngredient10,
        cocktail.strIngredient11,
        cocktail.strIngredient12,
        cocktail.strIngredient13,
        cocktail.strIngredient14,
        cocktail.strIngredient15,
      ];
      const ingredientsUsed = [];
      ingredientsAll.filter((ingredient) => {
        if (ingredient !== null) {
          ingredientsUsed.push(ingredient);
        }
      });
      ingredientsUsed.forEach((ingredient) => {
        const ingredientsEl = document.createElement("li");
        ingredientsEl.classList.add("cocktail__ingredients");
        ingredientsEl.innerText = ingredient;
        ulEl.appendChild(ingredientsEl);
      });

      const divFifthEl = document.createElement("div");
      divThirdEl.appendChild(divFifthEl);

      const subheadingSecondEl = document.createElement("p");
      subheadingSecondEl.classList.add("cocktail__subheading");
      subheadingSecondEl.innerText = "Measurements of Cocktail";
      divFifthEl.appendChild(subheadingSecondEl);

      const ulSecondEl = document.createElement("ul");
      divFifthEl.appendChild(ulSecondEl);

      const measurementAll = [
        cocktail.strMeasure1,
        cocktail.strMeasure2,
        cocktail.strMeasure3,
        cocktail.strMeasure4,
        cocktail.strMeasure5,
        cocktail.strMeasure6,
        cocktail.strMeasure7,
        cocktail.strMeasure8,
        cocktail.strMeasure9,
        cocktail.strMeasure10,
        cocktail.strMeasure11,
        cocktail.strMeasure12,
        cocktail.strMeasure13,
        cocktail.strMeasure14,
        cocktail.strMeasure15,
      ];
      const measurementUsed = [];
      measurementAll.filter((measure) => {
        if (measure !== null) {
          measurementUsed.push(measure);
        }
      });
      measurementUsed.forEach((measure) => {
        const measureEl = document.createElement("li");
        measureEl.classList.add("cocktail__measurement");
        measureEl.innerText = measure;
        ulSecondEl.appendChild(measureEl);
      });

      const subheadingTwoEl = document.createElement("p");
      subheadingTwoEl.classList.add("cocktail__subheading");
      subheadingTwoEl.innerText = "Instructions to Create Cocktail";
      divSecondEl.appendChild(subheadingTwoEl);

      const instructionsEl = document.createElement("p");
      instructionsEl.classList.add("cocktail__instructions");
      instructionsEl.innerText = cocktail.strInstructions;
      divSecondEl.appendChild(instructionsEl);

      divCocktailEl.appendChild(divSecondEl);

      const hiddenEl = document.querySelector(".cocktail__heading--hidden");
      hiddenEl.classList.remove("cocktail__heading--hidden");
    };
    getAndDisplayCocktail(responseChoice.data.drinks[0]);
  } catch (error) {
    console.error(error);
  }
};

selectionEl.addEventListener("change", getCocktailChoice);

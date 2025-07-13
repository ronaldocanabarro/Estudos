// Gera o link completo para a página da receita no formato estilizado
function generateMealLink(recipe) {
    const slug = recipe.strMeal
        .toLowerCase()
        .replace(/[()]/g, '') // Remove parenteses
        .replace(/[^a-z0-9\s-]/g, '') // Remove acentos e caracteres especiais
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .trim();

    return `https://www.themealdb.com/meal/${recipe.idMeal}-${slug}-recipe`;
}

// Busca os ingredientes na API e gera os checkboxes
async function loadIngredients() {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const data = await res.json();

        // Cria array de nomes e ordena alfabeticamente
        let ingredients = data.meals.map(meal => meal.strIngredient);
        ingredients.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), 'pt-BR'));

        const fieldset = document.getElementById('ingredients-fieldset');

        // Cria os checkboxes dinamicamente
        ingredients.forEach(ingredient => {
            const label = document.createElement('label');
            label.className = 'ingredient-label';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'ingredient';
            checkbox.value = ingredient;

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(ingredient));
            fieldset.appendChild(label);
        });
    } catch (error) {
        console.error('Erro ao buscar ingredientes:', error);
    }
}

// Escuta o envio do formulário e busca receitas
document.getElementById('ingredient-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Impede recarregamento da página

    // Coleta ingredientes selecionados
    const selected = Array.from(document.querySelectorAll('input[name="ingredient"]:checked'))
        .map(cb => cb.value);

    if (selected.length === 0) {
        alert('Selecione pelo menos um ingrediente!');
        return;
    }

    // Busca receitas que contenham cada ingrediente
    const recipeLists = await Promise.all(
        selected.map(async (ingredient) => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await res.json();
            return data.meals || [];
        })
    );

    // Encontra receitas que aparecem em todas as buscas (interseção)
    const intersected = recipeLists.reduce((acc, meals) => {
        const ids = meals.map(meal => meal.idMeal);
        return acc.filter(id => ids.includes(id));
    }, recipeLists[0].map(meal => meal.idMeal));

    // Busca os dados completos das receitas finais
    const finalRecipes = await Promise.all(
        intersected.map(async (id) => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await res.json();
            return data.meals[0];
        })
    );

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Limpa os resultados anteriores

    // Exibe mensagem caso nenhum prato seja encontrado
    if (finalRecipes.length === 0) {
        resultsDiv.innerHTML = '<p>Nenhuma receita encontrada com essa combinação de ingredientes.</p>';
    } else {
        // Cria cards para cada receita encontrada
        finalRecipes.forEach(recipe => {
            const link = document.createElement('a');
            link.href = generateMealLink(recipe);
            link.target = '_blank';
            link.className = 'recipe-link';

            const content = document.createElement('div');
            content.className = 'recipe-card';
            content.innerHTML = `
                <h4>${recipe.strMeal}</h4>
                <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" width="100" />
            `;

            link.appendChild(content);
            resultsDiv.appendChild(link);
        });
    }
});

// Inicializa tudo ao carregar a página
window.onload = loadIngredients;
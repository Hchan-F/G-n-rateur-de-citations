const poems = [
    "Le voyageur voit ce qu’il voit, le touriste voit ce qu’il est venu voir. \n— G.K. Chesterton (Angleterre)",
    "Même l’ombre d’un petit arbre est rafraîchissante. \n— Proverbe kényan",
    "L’eau prend toujours la forme du vase qui la contient. \n— Lao Tseu (Chine)",
    "Celui qui plante un arbre, plante un espoir. \n— Lucy Larcom (États-Unis)",
    "Un oiseau assis sur un arbre n’a jamais peur que la branche casse, car sa confiance n’est pas dans la branche mais dans ses ailes. \n— Proverbe brésilien",
    "Si tu veux aller vite, marche seul. Si tu veux aller loin, marche avec les autres. \n— Proverbe africain",
    "Une chute n'est pas un échec. L'échec, c'est de rester là où on est tombé. \n— Socrate (Grèce)",
    "L'homme qui déplace une montagne commence par déplacer de petites pierres. \n— Confucius (Chine)",
    "Nous ne voyons pas les choses telles qu'elles sont, nous les voyons telles que nous sommes. \n— Anaïs Nin (France)",
    "Celui qui veut voir l'arc-en-ciel doit apprendre à aimer la pluie. \n— Proverbe japonais",
];

const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate");

function generatePoem() {
    const randomIndex = Math.floor(Math.random() * poems.length);
    const randomPoem = poems[randomIndex].replace(/\n/g, "<br>");
    quoteElement.innerHTML = randomPoem;

    quoteElement.classList.remove("show");
    setTimeout(() => {
        quoteElement.classList.add("show");
    }, 100);
}

generateButton.addEventListener("click", generatePoem);
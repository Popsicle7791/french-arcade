// French Learning Games - JavaScript
class FrenchLearningGames {
    constructor() {
        this.currentTopic = null;
        this.currentGame = null;
        this.gameData = this.initializeGameData();
        this.matchingCards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.isProcessingMatch = false; // Prevent clicking during match processing
        
        // Sort Ninja game properties
        this.selectedCategories = [];
        this.sortNinjaCards = [];
        this.draggedCard = null;
        
        this.initializeEventListeners();
        this.initializeTheme();
    }

    // Initialize all game data
    initializeGameData() {
        return {
            days: {
                title: "Days of the Week",
                pairs: [
                    { english: "Monday", french: "Lundi" },
                    { english: "Tuesday", french: "Mardi" },
                    { english: "Wednesday", french: "Mercredi" },
                    { english: "Thursday", french: "Jeudi" },
                    { english: "Friday", french: "Vendredi" },
                    { english: "Saturday", french: "Samedi" },
                    { english: "Sunday", french: "Dimanche" }
                ]
            },
            months: {
                title: "Months of the Year",
                pairs: [
                    { english: "January", french: "Janvier" },
                    { english: "February", french: "Février" },
                    { english: "March", french: "Mars" },
                    { english: "April", french: "Avril" },
                    { english: "May", french: "Mai" },
                    { english: "June", french: "Juin" },
                    { english: "July", french: "Juillet" },
                    { english: "August", french: "Août" },
                    { english: "September", french: "Septembre" },
                    { english: "October", french: "Octobre" },
                    { english: "November", french: "Novembre" },
                    { english: "December", french: "Décembre" }
                ]
            },
            "numbers1-10": {
                title: "Numbers 1-10",
                pairs: [
                    { english: "One", french: "Un" },
                    { english: "Two", french: "Deux" },
                    { english: "Three", french: "Trois" },
                    { english: "Four", french: "Quatre" },
                    { english: "Five", french: "Cinq" },
                    { english: "Six", french: "Six" },
                    { english: "Seven", french: "Sept" },
                    { english: "Eight", french: "Huit" },
                    { english: "Nine", french: "Neuf" },
                    { english: "Ten", french: "Dix" }
                ]
            },
            "numbers10-20": {
                title: "Numbers 10-20",
                pairs: [
                    { english: "Ten", french: "Dix" },
                    { english: "Eleven", french: "Onze" },
                    { english: "Twelve", french: "Douze" },
                    { english: "Thirteen", french: "Treize" },
                    { english: "Fourteen", french: "Quatorze" },
                    { english: "Fifteen", french: "Quinze" },
                    { english: "Sixteen", french: "Seize" },
                    { english: "Seventeen", french: "Dix-sept" },
                    { english: "Eighteen", french: "Dix-huit" },
                    { english: "Nineteen", french: "Dix-neuf" },
                    { english: "Twenty", french: "Vingt" }
                ]
            },
            "numbers20-30": {
                title: "Numbers 20-30",
                pairs: [
                    { english: "Twenty", french: "Vingt" },
                    { english: "Twenty-one", french: "Vingt-et-un" },
                    { english: "Twenty-two", french: "Vingt-deux" },
                    { english: "Twenty-three", french: "Vingt-trois" },
                    { english: "Twenty-four", french: "Vingt-quatre" },
                    { english: "Twenty-five", french: "Vingt-cinq" },
                    { english: "Twenty-six", french: "Vingt-six" },
                    { english: "Twenty-seven", french: "Vingt-sept" },
                    { english: "Twenty-eight", french: "Vingt-huit" },
                    { english: "Twenty-nine", french: "Vingt-neuf" },
                    { english: "Thirty", french: "Trente" }
                ]
            },
            "numbers30-40": {
                title: "Numbers 30-40",
                pairs: [
                    { english: "Thirty", french: "Trente" },
                    { english: "Thirty-one", french: "Trente-et-un" },
                    { english: "Thirty-two", french: "Trente-deux" },
                    { english: "Thirty-three", french: "Trente-trois" },
                    { english: "Thirty-four", french: "Trente-quatre" },
                    { english: "Thirty-five", french: "Trente-cinq" },
                    { english: "Thirty-six", french: "Trente-six" },
                    { english: "Thirty-seven", french: "Trente-sept" },
                    { english: "Thirty-eight", french: "Trente-huit" },
                    { english: "Thirty-nine", french: "Trente-neuf" },
                    { english: "Forty", french: "Quarante" }
                ]
            },
            "numbers40-50": {
                title: "Numbers 40-50",
                pairs: [
                    { english: "Forty", french: "Quarante" },
                    { english: "Forty-one", french: "Quarante-et-un" },
                    { english: "Forty-two", french: "Quarante-deux" },
                    { english: "Forty-three", french: "Quarante-trois" },
                    { english: "Forty-four", french: "Quarante-quatre" },
                    { english: "Forty-five", french: "Quarante-cinq" },
                    { english: "Forty-six", french: "Quarante-six" },
                    { english: "Forty-seven", french: "Quarante-sept" },
                    { english: "Forty-eight", french: "Quarante-huit" },
                    { english: "Forty-nine", french: "Quarante-neuf" },
                    { english: "Fifty", french: "Cinquante" }
                ]
            },
            "numbers50-60": {
                title: "Numbers 50-60",
                pairs: [
                    { english: "Fifty", french: "Cinquante" },
                    { english: "Fifty-one", french: "Cinquante-et-un" },
                    { english: "Fifty-two", french: "Cinquante-deux" },
                    { english: "Fifty-three", french: "Cinquante-trois" },
                    { english: "Fifty-four", french: "Cinquante-quatre" },
                    { english: "Fifty-five", french: "Cinquante-cinq" },
                    { english: "Fifty-six", french: "Cinquante-six" },
                    { english: "Fifty-seven", french: "Cinquante-sept" },
                    { english: "Fifty-eight", french: "Cinquante-huit" },
                    { english: "Fifty-nine", french: "Cinquante-neuf" },
                    { english: "Sixty", french: "Soixante" }
                ]
            },
            "numbers60-70": {
                title: "Numbers 60-70",
                pairs: [
                    { english: "Sixty", french: "Soixante" },
                    { english: "Sixty-one", french: "Soixante-et-un" },
                    { english: "Sixty-two", french: "Soixante-deux" },
                    { english: "Sixty-three", french: "Soixante-trois" },
                    { english: "Sixty-four", french: "Soixante-quatre" },
                    { english: "Sixty-five", french: "Soixante-cinq" },
                    { english: "Sixty-six", french: "Soixante-six" },
                    { english: "Sixty-seven", french: "Soixante-sept" },
                    { english: "Sixty-eight", french: "Soixante-huit" },
                    { english: "Sixty-nine", french: "Soixante-neuf" },
                    { english: "Seventy", french: "Soixante-dix" }
                ]
            },
            "numbers70-80": {
                title: "Numbers 70-80",
                pairs: [
                    { english: "Seventy", french: "Soixante-dix" },
                    { english: "Seventy-one", french: "Soixante-et-onze" },
                    { english: "Seventy-two", french: "Soixante-douze" },
                    { english: "Seventy-three", french: "Soixante-treize" },
                    { english: "Seventy-four", french: "Soixante-quatorze" },
                    { english: "Seventy-five", french: "Soixante-quinze" },
                    { english: "Seventy-six", french: "Soixante-seize" },
                    { english: "Seventy-seven", french: "Soixante-dix-sept" },
                    { english: "Seventy-eight", french: "Soixante-dix-huit" },
                    { english: "Seventy-nine", french: "Soixante-dix-neuf" },
                    { english: "Eighty", french: "Quatre-vingts" }
                ]
            },
            "numbers80-90": {
                title: "Numbers 80-90",
                pairs: [
                    { english: "Eighty", french: "Quatre-vingts" },
                    { english: "Eighty-one", french: "Quatre-vingt-un" },
                    { english: "Eighty-two", french: "Quatre-vingt-deux" },
                    { english: "Eighty-three", french: "Quatre-vingt-trois" },
                    { english: "Eighty-four", french: "Quatre-vingt-quatre" },
                    { english: "Eighty-five", french: "Quatre-vingt-cinq" },
                    { english: "Eighty-six", french: "Quatre-vingt-six" },
                    { english: "Eighty-seven", french: "Quatre-vingt-sept" },
                    { english: "Eighty-eight", french: "Quatre-vingt-huit" },
                    { english: "Eighty-nine", french: "Quatre-vingt-neuf" },
                    { english: "Ninety", french: "Quatre-vingt-dix" }
                ]
            },
            "numbers90-100": {
                title: "Numbers 90-100",
                pairs: [
                    { english: "Ninety", french: "Quatre-vingt-dix" },
                    { english: "Ninety-one", french: "Quatre-vingt-onze" },
                    { english: "Ninety-two", french: "Quatre-vingt-douze" },
                    { english: "Ninety-three", french: "Quatre-vingt-treize" },
                    { english: "Ninety-four", french: "Quatre-vingt-quatorze" },
                    { english: "Ninety-five", french: "Quatre-vingt-quinze" },
                    { english: "Ninety-six", french: "Quatre-vingt-seize" },
                    { english: "Ninety-seven", french: "Quatre-vingt-dix-sept" },
                    { english: "Ninety-eight", french: "Quatre-vingt-dix-huit" },
                    { english: "Ninety-nine", french: "Quatre-vingt-dix-neuf" },
                    { english: "One hundred", french: "Cent" }
                ]
            },
            "numbers1-100": {
                title: "Numbers 1-100",
                pairs: [
                    { english: "One", french: "Un" },
                    { english: "Two", french: "Deux" },
                    { english: "Three", french: "Trois" },
                    { english: "Four", french: "Quatre" },
                    { english: "Five", french: "Cinq" },
                    { english: "Six", french: "Six" },
                    { english: "Seven", french: "Sept" },
                    { english: "Eight", french: "Huit" },
                    { english: "Nine", french: "Neuf" },
                    { english: "Ten", french: "Dix" },
                    { english: "Eleven", french: "Onze" },
                    { english: "Twelve", french: "Douze" },
                    { english: "Thirteen", french: "Treize" },
                    { english: "Fourteen", french: "Quatorze" },
                    { english: "Fifteen", french: "Quinze" },
                    { english: "Sixteen", french: "Seize" },
                    { english: "Seventeen", french: "Dix-sept" },
                    { english: "Eighteen", french: "Dix-huit" },
                    { english: "Nineteen", french: "Dix-neuf" },
                    { english: "Twenty", french: "Vingt" },
                    { english: "Twenty-one", french: "Vingt-et-un" },
                    { english: "Twenty-two", french: "Vingt-deux" },
                    { english: "Twenty-three", french: "Vingt-trois" },
                    { english: "Twenty-four", french: "Vingt-quatre" },
                    { english: "Twenty-five", french: "Vingt-cinq" },
                    { english: "Twenty-six", french: "Vingt-six" },
                    { english: "Twenty-seven", french: "Vingt-sept" },
                    { english: "Twenty-eight", french: "Vingt-huit" },
                    { english: "Twenty-nine", french: "Vingt-neuf" },
                    { english: "Thirty", french: "Trente" },
                    { english: "Thirty-one", french: "Trente-et-un" },
                    { english: "Thirty-two", french: "Trente-deux" },
                    { english: "Thirty-three", french: "Trente-trois" },
                    { english: "Thirty-four", french: "Trente-quatre" },
                    { english: "Thirty-five", french: "Trente-cinq" },
                    { english: "Thirty-six", french: "Trente-six" },
                    { english: "Thirty-seven", french: "Trente-sept" },
                    { english: "Thirty-eight", french: "Trente-huit" },
                    { english: "Thirty-nine", french: "Trente-neuf" },
                    { english: "Forty", french: "Quarante" },
                    { english: "Forty-one", french: "Quarante-et-un" },
                    { english: "Forty-two", french: "Quarante-deux" },
                    { english: "Forty-three", french: "Quarante-trois" },
                    { english: "Forty-four", french: "Quarante-quatre" },
                    { english: "Forty-five", french: "Quarante-cinq" },
                    { english: "Forty-six", french: "Quarante-six" },
                    { english: "Forty-seven", french: "Quarante-sept" },
                    { english: "Forty-eight", french: "Quarante-huit" },
                    { english: "Forty-nine", french: "Quarante-neuf" },
                    { english: "Fifty", french: "Cinquante" },
                    { english: "Fifty-one", french: "Cinquante-et-un" },
                    { english: "Fifty-two", french: "Cinquante-deux" },
                    { english: "Fifty-three", french: "Cinquante-trois" },
                    { english: "Fifty-four", french: "Cinquante-quatre" },
                    { english: "Fifty-five", french: "Cinquante-cinq" },
                    { english: "Fifty-six", french: "Cinquante-six" },
                    { english: "Fifty-seven", french: "Cinquante-sept" },
                    { english: "Fifty-eight", french: "Cinquante-huit" },
                    { english: "Fifty-nine", french: "Cinquante-neuf" },
                    { english: "Sixty", french: "Soixante" },
                    { english: "Sixty-one", french: "Soixante-et-un" },
                    { english: "Sixty-two", french: "Soixante-deux" },
                    { english: "Sixty-three", french: "Soixante-trois" },
                    { english: "Sixty-four", french: "Soixante-quatre" },
                    { english: "Sixty-five", french: "Soixante-cinq" },
                    { english: "Sixty-six", french: "Soixante-six" },
                    { english: "Sixty-seven", french: "Soixante-sept" },
                    { english: "Sixty-eight", french: "Soixante-huit" },
                    { english: "Sixty-nine", french: "Soixante-neuf" },
                    { english: "Seventy", french: "Soixante-dix" },
                    { english: "Seventy-one", french: "Soixante-et-onze" },
                    { english: "Seventy-two", french: "Soixante-deux" },
                    { english: "Seventy-three", french: "Soixante-trois" },
                    { english: "Seventy-four", french: "Soixante-quatre" },
                    { english: "Seventy-five", french: "Soixante-cinq" },
                    { english: "Seventy-six", french: "Soixante-six" },
                    { english: "Seventy-seven", french: "Soixante-sept" },
                    { english: "Seventy-eight", french: "Soixante-huit" },
                    { english: "Seventy-nine", french: "Soixante-neuf" },
                    { english: "Eighty", french: "Quatre-vingts" },
                    { english: "Eighty-one", french: "Quatre-vingt-un" },
                    { english: "Eighty-two", french: "Quatre-vingt-deux" },
                    { english: "Eighty-three", french: "Quatre-vingt-trois" },
                    { english: "Eighty-four", french: "Quatre-vingt-quatre" },
                    { english: "Eighty-five", french: "Quatre-vingt-cinq" },
                    { english: "Eighty-six", french: "Quatre-vingt-six" },
                    { english: "Eighty-seven", french: "Quatre-vingt-sept" },
                    { english: "Eighty-eight", french: "Quatre-vingt-huit" },
                    { english: "Eighty-nine", french: "Quatre-vingt-neuf" },
                    { english: "Ninety", french: "Quatre-vingt-dix" },
                    { english: "Ninety-one", french: "Quatre-vingt-onze" },
                    { english: "Ninety-two", french: "Quatre-vingt-douze" },
                    { english: "Ninety-three", french: "Quatre-vingt-treize" },
                    { english: "Ninety-four", french: "Quatre-vingt-quatorze" },
                    { english: "Ninety-five", french: "Quatre-vingt-quinze" },
                    { english: "Ninety-six", french: "Quatre-vingt-seize" },
                    { english: "Ninety-seven", french: "Quatre-vingt-dix-sept" },
                    { english: "Ninety-eight", french: "Quatre-vingt-dix-huit" },
                    { english: "Ninety-nine", french: "Quatre-vingt-dix-neuf" },
                    { english: "One hundred", french: "Cent" }
                ]
            },
            colors: {
                title: "Colors",
                pairs: [
                    { english: "Red", french: "Rouge" },
                    { english: "Blue", french: "Bleu" },
                    { english: "Green", french: "Vert" },
                    { english: "Yellow", french: "Jaune" },
                    { english: "Orange", french: "Orange" },
                    { english: "Purple", french: "Violet" },
                    { english: "Pink", french: "Rose" },
                    { english: "Black", french: "Noir" },
                    { english: "White", french: "Blanc" },
                    { english: "Brown", french: "Marron" },
                    { english: "Gray", french: "Gris" }
                ]
            },
            seasons: {
                title: "Seasons",
                pairs: [
                    { english: "Spring", french: "Le printemps" },
                    { english: "Summer", french: "L'été" },
                    { english: "Autumn", french: "L'automne" },
                    { english: "Winter", french: "L'hiver" }
                ]
            },
            clothing: {
                title: "Clothing",
                pairs: [
                    { english: "Shirt", french: "Chemise" },
                    { english: "Pants", french: "Pantalon" },
                    { english: "Shoes", french: "Chaussures" },
                    { english: "Hat", french: "Chapeau" },
                    { english: "Gloves", french: "Gants" },
                    { english: "Scarf", french: "Écharpe" },
                    { english: "Socks", french: "Chaussettes" },
                    { english: "Jacket", french: "Veste" },
                    { english: "Dress", french: "Rob" }
                ]
            },
            animals: {
                title: "Animals",
                pairs: [
                    { english: "Dog", french: "Chien" },
                    { english: "Cat", french: "Chat" },
                    { english: "Bird", french: "Oiseau" },
                    { english: "Fish", french: "Poisson" },
                    { english: "Bear", french: "Ours" },
                    { english: "Lion", french: "Lion" },
                    { english: "Tiger", french: "Tigre" },
                    { english: "Elephant", french: "Éléphant" },
                    { english: "Zebra", french: "Zèbre" },
                ]
            },
            fruits: {
                title: "Fruits",
                pairs: [
                    { english: "Apple", french: "Pomme" },
                    { english: "Banana", french: "Banane" },
                    { english: "Cherry", french: "Cerise" },
                    { english: "Date", french: "Datte" },
                    { english: "Elderberry", french: "Myrtille" },
                    { english: "Fig", french: "Figue" },
                    { english: "Grape", french: "Raisin" },
                    { english: "Honeydew", french: "Melon" },
                    { english: "Kiwi", french: "Kiwi" },
                    { english: "Lemon", french: "Citron" },
                    { english: "Mango", french: "Mangue" },
                    { english: "Melon", french: "Melon" },
                    { english: "Nectarine", french: "Nectarine" },
                    { english: "Orange", french: "Orange" },
                    { english: "Papaya", french: "Papaye" },
                    { english: "Pear", french: "Poire" },
                    { english: "Peach", french: "Pêche" },
                    { english: "Pineapple", french: "Ananas" },
                    { english: "Plum", french: "Prune" },
                    { english: "Raspberry", french: "Framboise" },
                    { english: "Strawberry", french: "Fraise" },
                    { english: "Watermelon", french: "Melon" },
                ]
            },
            vegetables: {
                title: "Vegetables",
                pairs: [
                    { english: "Carrot", french: "Carotte" },
                    { english: "Potato", french: "Pomme de terre" },
                    { english: "Tomato", french: "Tomate" },
                    { english: "Onion", french: "Oignon" },
                    { english: "Garlic", french: "Ail" },
                    { english: "Lettuce", french: "Laitue" },
                    { english: "Cucumber", french: "Concombre" },
                    { english: "Bell Pepper", french: "Poivron" },
                    { english: "Eggplant", french: "Aubergine" },
                    { english: "Zucchini", french: "Courgette" },
                ]
            },
            classroomobjects: {
                title: "Classroom Objects",
                pairs: [
                    { english: "Chair", french: "Chaise" },
                    { english: "Table", french: "Table" },
                    { english: "Desk", french: "Bureau" },
                    { english: "Book", french: "Livre" },
                    { english: "Pencil", french: "Crayon" },
                    { english: "Eraser", french: "Gomme" },
                    { english: "Ruler", french: "Règle" },
                    { english: "Calculator", french: "Calculatrice" },
                    { english: "Computer", french: "Ordinateur" },
                    { english: "Projector", french: "Projecteur" },
                    { english: "Smartboard", french: "Tableau interactif" },
                    { english: "Whiteboard", french: "Tableau blanc" },
                    { english: "Marker", french: "Marqueur" },
                    { english: "Pen", french: "Stylo" },
                    { english: "Notebook", french: "Carnet" },
                    { english: "Backpack", french: "Sac à dos" },
                    { english: "Lunchbox", french: "Boîte à lunch" },
                ]
            }
        };
    }

    // Initialize event listeners
    initializeEventListeners() {
        // Topic selection
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectTopic(e.target.dataset.topic);
            });
        });

        // Game selection
        document.getElementById('flashcards-btn').addEventListener('click', () => {
            this.selectGame('flashcards');
        });

        document.getElementById('matching-btn').addEventListener('click', () => {
            this.selectGame('matching');
        });

        document.getElementById('sortninja-btn').addEventListener('click', () => {
            this.selectGame('sortninja');
        });

        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('change', () => {
            this.toggleTheme();
        });
    }

    // Initialize theme from localStorage
    initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        // Set checkbox state to match theme
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.checked = savedTheme === 'dark';
        }
    }

    // Get CSS color for French color names
    getColorForFrench(frenchColor) {
        const colorMap = {
            'Rouge': '#e74c3c',      // Red
            'Bleu': '#3498db',       // Blue
            'Vert': '#27ae60',       // Green
            'Jaune': '#f1c40f',      // Yellow
            'Orange': '#e67e22',     // Orange
            'Violet': '#9b59b6',     // Purple
            'Rose': '#e91e63',       // Pink
            'Noir': '#2c3e50',       // Black
            'Blanc': '#ecf0f1',      // White
            'Marron': '#8b4513',     // Brown
            'Gris': '#95a5a6'        // Gray
        };
        return colorMap[frenchColor] || '#ffffff';
    }

    // Get CSS color for English color names
    getColorForEnglish(englishColor) {
        const colorMap = {
            'Red': '#e74c3c',
            'Blue': '#3498db',
            'Green': '#27ae60',
            'Yellow': '#f1c40f',
            'Orange': '#e67e22',
            'Purple': '#9b59b6',
            'Pink': '#e91e63',
            'Black': '#2c3e50',
            'White': '#ecf0f1',
            'Brown': '#8b4513',
            'Gray': '#95a5a6'
        };
        return colorMap[englishColor] || '#ffffff';
    }

    // Get text color (dark or white) based on background color
    getTextColor(bgColor) {
        const lightColors = ['#ecf0f1', '#f1c40f']; // White and Yellow
        return lightColors.includes(bgColor) ? '#2c3e50' : 'white';
    }

    // Toggle between light and dark theme
    toggleTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Select topic
    selectTopic(topic) {
        this.currentTopic = topic;
        
        // Update active topic button
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-topic="${topic}"]`).classList.add('active');

        // If a game is already selected, start it
        if (this.currentGame) {
            this.startGame();
        }
    }

    // Select game
    selectGame(game) {
        this.currentGame = game;
        
        // Update active game button
        document.querySelectorAll('.game-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`${game}-btn`).classList.add('active');

        // Sort Ninja doesn't require a topic selection
        if (game === 'sortninja') {
            this.startGame();
        } else if (this.currentTopic) {
            // Other games require a topic to be selected
            this.startGame();
        }
    }

    // Start the selected game
    startGame() {
        if (!this.currentGame) return;
        
        // Sort Ninja doesn't require a topic
        if (this.currentGame === 'sortninja') {
            this.renderSortNinjaGame();
            return;
        }
        
        // Other games require a topic
        if (!this.currentTopic) return;

        const gameContainer = document.getElementById('game-container');
        
        if (this.currentGame === 'flashcards') {
            this.renderFlashcards();
        } else if (this.currentGame === 'matching') {
            this.renderMatchingGame();
        } else if (this.currentGame === 'sortninja') {
            this.renderSortNinjaGame();
        }
    }

    // Render flashcards game
    renderFlashcards() {
        const gameContainer = document.getElementById('game-container');
        const topicData = this.gameData[this.currentTopic];
        
        gameContainer.innerHTML = `
            <div class="game-header">
                <h2>🃏 ${topicData.title} - Flashcards</h2>
                <p>Click on a card to see the French translation!</p>
            </div>
            <div class="flashcards-grid">
                ${topicData.pairs.map(pair => {
                    const isColorsTopic = this.currentTopic === 'colors';
                    const colorStyle = isColorsTopic ? `style="background: ${this.getColorForFrench(pair.french)}; color: ${pair.french === 'Blanc' ? '#2c3e50' : 'white'};"` : '';
                    return `
                        <div class="flashcard" data-english="${pair.english}" data-french="${pair.french}" ${colorStyle}>
                            <div class="flashcard-content">
                                ${pair.english}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        // Add click listeners to flashcards
        document.querySelectorAll('.flashcard').forEach(card => {
            card.addEventListener('click', () => {
                this.flipFlashcard(card);
            });
        });
    }

    // Flip flashcard with two-stage animation
    flipFlashcard(card) {
        if (card.classList.contains('flipping-first-half') || card.classList.contains('flipping-second-half')) {
            return; // Prevent clicking during animation
        }

        const english = card.dataset.english;
        const french = card.dataset.french;
        const isFlipped = card.classList.contains('flipped');
        const isColorsTopic = this.currentTopic === 'colors';
        const content = card.querySelector('.flashcard-content');
        
        // Start first half of flip
        card.classList.add('flipping-first-half');
        
        // When first half of flip is complete (card is vertical)
        setTimeout(() => {
            // Remove first half animation
            card.classList.remove('flipping-first-half');
            
            // Update content while card is vertical (invisible to user)
            if (isFlipped) {
                // Currently showing French, flip back to English
                card.classList.remove('flipped');
                content.textContent = english;
                
                // For colors topic, maintain the color background
                if (isColorsTopic) {
                    const colorBg = this.getColorForFrench(french);
                    const textColor = french === 'Blanc' ? '#2c3e50' : 'white';
                    card.style.background = colorBg;
                    card.style.color = textColor;
                }
            } else {
                // Currently showing English, flip to French
                card.classList.add('flipped');
                content.textContent = french;
                
                // For colors topic, maintain the color background
                if (isColorsTopic) {
                    const colorBg = this.getColorForFrench(french);
                    const textColor = french === 'Blanc' ? '#2c3e50' : 'white';
                    card.style.background = colorBg;
                    card.style.color = textColor;
                }
            }
            
            // Start second half of flip
            card.classList.add('flipping-second-half');
            
            // Fade in the text as card completes flip
            setTimeout(() => {
                content.classList.add('fade-in');
            }, 150);
            
            // Cleanup animations when everything is complete
            setTimeout(() => {
                card.classList.remove('flipping-second-half');
                content.classList.remove('fade-in');
            }, 300);
            
        }, 300); // Time for first half of flip
    }

    // Render matching game
    renderMatchingGame() {
        const gameContainer = document.getElementById('game-container');
        const topicData = this.gameData[this.currentTopic];
        
        // Reset game state
        this.matchingCards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.isProcessingMatch = false; // Reset processing state for new game

        // Create pairs for matching game
        const allCards = [];
        topicData.pairs.forEach(pair => {
            allCards.push({ text: pair.english, type: 'english', pair: pair.french });
            allCards.push({ text: pair.french, type: 'french', pair: pair.english });
        });

        // Shuffle cards
        this.shuffleArray(allCards);

        gameContainer.innerHTML = `
            <div class="game-header">
                <h2>🎯 ${topicData.title} - Card Matching</h2>
                <p>Find matching pairs! Click cards to flip them over.</p>
                <div class="game-controls">
                    <div class="game-stats">
                        <span>Matches: <span id="match-count">0</span> / ${topicData.pairs.length}</span>
                    </div>
                    <button id="reset-matching-btn" class="reset-btn">🔄 Reset Game</button>
                </div>
            </div>
            <div class="matching-grid">
                ${allCards.map((card, index) => `
                    <div class="matching-card" data-text="${card.text}" data-pair="${card.pair}" data-index="${index}">
                        <div class="matching-card-content">
                            ?
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Store card data
        this.matchingCards = allCards;

        // Add click listeners to matching cards
        document.querySelectorAll('.matching-card').forEach(card => {
            card.addEventListener('click', () => {
                this.flipMatchingCard(card);
            });
        });

        // Add reset button listener
        document.getElementById('reset-matching-btn').addEventListener('click', () => {
            this.resetMatchingGame();
        });
    }

    // Reset matching game
    resetMatchingGame() {
        // Reset all game state
        this.matchingCards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.isProcessingMatch = false;
        
        // Re-render the game
        this.renderMatchingGame();
    }

    // Flip matching card
    flipMatchingCard(card) {
        if (card.classList.contains('flipped') || card.classList.contains('matched') || this.isProcessingMatch) return;

        const cardIndex = parseInt(card.dataset.index);
        const cardData = this.matchingCards[cardIndex];
        const isColorsTopic = this.currentTopic === 'colors';
        
        // Flip the card
        card.classList.add('flipped');
        card.querySelector('.matching-card-content').textContent = cardData.text;
        
        // For colors topic, apply color background for both English and French cards when flipped
        if (isColorsTopic) {
            let colorBg;
            if (cardData.type === 'french') {
                colorBg = this.getColorForFrench(cardData.text);
            } else if (cardData.type === 'english') {
                colorBg = this.getColorForEnglish(cardData.text);
            }
            
            if (colorBg) {
                const textColor = this.getTextColor(colorBg);
                card.style.background = colorBg;
                card.style.color = textColor;
            }
        }
        
        // Add to flipped cards
        this.flippedCards.push({ card, cardData });

        // Check for match if two cards are flipped
        if (this.flippedCards.length === 2) {
            this.isProcessingMatch = true; // Prevent further clicks
            
            // Add visual feedback - disable all other cards
            document.querySelectorAll('.matching-card').forEach(card => {
                if (!card.classList.contains('flipped') && !card.classList.contains('matched')) {
                    card.classList.add('disabled');
                }
            });
            
            setTimeout(() => {
                this.checkMatch();
            }, 1500); // Increased time to see both cards clearly
        }
    }

    // Check if flipped cards match
    checkMatch() {
        const [card1, card2] = this.flippedCards;
        
        if (card1.cardData.pair === card2.cardData.text) {
            // Match found!
            this.matchedPairs++;
            document.getElementById('match-count').textContent = this.matchedPairs;
            
            // Add matched class and shrink animation
            card1.card.classList.add('matched');
            card2.card.classList.add('matched');
            
            // Re-enable clicking after animation completes
            setTimeout(() => {
                this.isProcessingMatch = false;
                // Remove disabled class from all cards
                document.querySelectorAll('.matching-card.disabled').forEach(card => {
                    card.classList.remove('disabled');
                });
            }, 600); // Match animation duration
            
            // Check if game is complete
            const topicData = this.gameData[this.currentTopic];
            if (this.matchedPairs === topicData.pairs.length) {
                setTimeout(() => {
                    this.showGameComplete();
                }, 1000);
            }
        } else {
            // No match - flip cards back with proper animation
            setTimeout(() => {
                card1.card.classList.remove('flipped');
                card2.card.classList.remove('flipped');
                card1.card.querySelector('.matching-card-content').textContent = '?';
                card2.card.querySelector('.matching-card-content').textContent = '?';
                
                // Reset color backgrounds for colors topic
                const isColorsTopic = this.currentTopic === 'colors';
                if (isColorsTopic) {
                    // Reset to default background for all cards when flipping back
                    card1.card.style.background = '';
                    card1.card.style.color = '';
                    card2.card.style.background = '';
                    card2.card.style.color = '';
                }
                
                // Re-enable clicking after cards flip back
                this.isProcessingMatch = false;
                // Remove disabled class from all cards
                document.querySelectorAll('.matching-card.disabled').forEach(card => {
                    card.classList.remove('disabled');
                });
            }, 500); // Give a moment to see the cards before flipping back
        }
        
        // Reset flipped cards
        this.flippedCards = [];
    }

    // Show game complete message
    showGameComplete() {
        const gameContainer = document.getElementById('game-container');
        gameContainer.innerHTML = `
            <div class="game-complete">
                <h2>🎉 Congratulations! 🎉</h2>
                <p>You've matched all the pairs!</p>
                <button class="play-again-btn" onclick="location.reload()">Play Again</button>
            </div>
        `;
    }

    // Render Sort Ninja game
    renderSortNinjaGame() {
        const gameContainer = document.getElementById('game-container');
        
        // Get available categories (excluding numbers)
        const availableCategories = Object.keys(this.gameData).filter(key => 
            !key.startsWith('numbers')
        );
        
        gameContainer.innerHTML = `
            <div class="game-header">
                <h2>🥷 Sort Ninja</h2>
                <p>Select 2-4 categories to sort words into!</p>
            </div>
            <div class="category-selection">
                <h3>Choose Categories:</h3>
                <div id="category-counter" class="category-counter">Selected: 0</div>
                <div class="category-checkboxes">
                    ${availableCategories.map(category => `
                        <label class="category-checkbox">
                            <input type="checkbox" value="${category}" class="category-input">
                            <span class="checkbox-label">${this.gameData[category].title}</span>
                        </label>
                    `).join('')}
                </div>
                <div class="tooltip-container">
                    <button id="start-sort-game" class="start-sort-btn" disabled aria-disabled="true">Start Sorting!</button>
                    <span id="start-tooltip" class="tooltip-text">Please select 2–4 categories</span>
                </div>
            </div>
        `;
        
        // Add event listeners for category selection
        this.initializeCategorySelection();
    }
    // Initialize category selection for Sort Ninja
    initializeCategorySelection() {
        const checkboxes = document.querySelectorAll('.category-input');
        const startBtn = document.getElementById('start-sort-game');
        const counterEl = document.getElementById('category-counter');
        const tooltipEl = document.getElementById('start-tooltip');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const checkedBoxes = document.querySelectorAll('.category-input:checked');

                // Update on-screen counter
                const count = checkedBoxes.length;
                if (counterEl) counterEl.textContent = `Selected: ${count}`;

                // Require between 2 and 4 categories for better gameplay
                if (count >= 2 && count <= 4) {
                    startBtn.disabled = false;
                    startBtn.setAttribute('aria-disabled', 'false');
                    this.selectedCategories = Array.from(checkedBoxes).map(cb => cb.value);
                    if (tooltipEl) tooltipEl.textContent = 'Ready! Click to start sorting.';
                    startBtn.title = 'Start sorting';
                } else {
                    startBtn.disabled = true;
                    startBtn.setAttribute('aria-disabled', 'true');
                    // keep selectedCategories empty until valid selection made
                    this.selectedCategories = [];
                    if (count === 0) {
                        if (tooltipEl) tooltipEl.textContent = 'Please select 2–4 categories';
                        startBtn.title = 'Please select 2–4 categories';
                    } else if (count === 1) {
                        if (tooltipEl) tooltipEl.textContent = 'Select at least 2 categories';
                        startBtn.title = 'Select at least 2 categories';
                    } else {
                        if (tooltipEl) tooltipEl.textContent = 'You can select up to 4 categories';
                        startBtn.title = 'You can select up to 4 categories';
                    }
                }
            });
        });

        startBtn.addEventListener('click', () => {
            this.startSortNinjaGame();
        });
    }

    // Start the actual Sort Ninja game
    startSortNinjaGame() {
        const gameContainer = document.getElementById('game-container');
        
        // Collect all words from selected categories
        const allWords = [];
        this.selectedCategories.forEach(category => {
            this.gameData[category].pairs.forEach(pair => {
                allWords.push({
                    text: pair.french,         // Display French text on cards
                    english: pair.english,     // Keep English for reference
                    category: category,
                    categoryTitle: this.gameData[category].title
                });
            });
        });
        
        // Shuffle and select 10 random words
        this.shuffleArray(allWords);
        this.sortNinjaCards = allWords.slice(0, 10);
        
        gameContainer.innerHTML = `
            <div class="game-header">
                <h2>🥷 Sort Ninja</h2>
                <p>Drag cards to the correct category box!</p>
                <div class="game-controls">
                    <div class="sort-stats">
                        <span>Cards Left: <span id="cards-left">${this.sortNinjaCards.length}</span></span>
                    </div>
                    <button id="reset-sortninja-btn" class="reset-btn">🔄 Reset Game</button>
                </div>
                <div class="selected-categories-info">
                    <p>Selected Categories: ${this.selectedCategories.map(cat => this.gameData[cat].title).join(', ')}</p>
                </div>
            </div>
            <div class="sort-game-area">
                <div class="sort-cards-container">
                    ${this.sortNinjaCards.map((card, index) => `
                        <div class="sort-card" 
                             data-category="${card.category}" 
                             data-index="${index}" 
                             draggable="true"
                             title="${card.english}">
                            ${card.text}
                        </div>
                    `).join('')}
                </div>
                <div class="sort-boxes-container">
                    ${this.selectedCategories.map(category => `
                        <div class="sort-box" data-category="${category}">
                            <h4>${this.gameData[category].title}</h4>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Initialize drag and drop
        this.initializeDragAndDrop();
        
        // Add reset button listener
        document.getElementById('reset-sortninja-btn').addEventListener('click', () => {
            this.resetSortNinjaGame();
        });
    }

    // Initialize drag and drop functionality
    initializeDragAndDrop() {
        const cards = document.querySelectorAll('.sort-card');
        const boxes = document.querySelectorAll('.sort-box');
        
        cards.forEach(card => {
            card.addEventListener('dragstart', (e) => {
                this.draggedCard = card;
                card.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
            });
            
            card.addEventListener('dragend', () => {
                card.classList.remove('dragging');
                this.draggedCard = null;
            });
        });
        
        boxes.forEach(box => {
            box.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                box.classList.add('drag-over');
            });
            
            box.addEventListener('dragleave', () => {
                box.classList.remove('drag-over');
            });
            
            box.addEventListener('drop', (e) => {
                e.preventDefault();
                box.classList.remove('drag-over');
                
                if (this.draggedCard) {
                    this.handleCardDrop(this.draggedCard, box);
                }
            });
        });
    }

    // Handle card drop logic
    handleCardDrop(card, box) {
        const cardCategory = card.dataset.category;
        const boxCategory = box.dataset.category;
        
        if (cardCategory === boxCategory) {
            // Correct drop - remove card with animation
            card.style.animation = 'shrinkDisappear 0.6s ease-in-out forwards';
            setTimeout(() => {
                card.remove();
                this.updateCardsLeft();
                this.checkGameComplete();
            }, 600);
        } else {
            // Incorrect drop - slide back to original position
            card.style.animation = 'slideBack 0.5s ease-in-out';
            setTimeout(() => {
                card.style.animation = '';
            }, 500);
        }
    }

    // Update cards left counter
    updateCardsLeft() {
        const cardsLeft = document.querySelectorAll('.sort-card').length;
        document.getElementById('cards-left').textContent = cardsLeft;
    }

    // Check if game is complete
    checkGameComplete() {
        const remainingCards = document.querySelectorAll('.sort-card');
        if (remainingCards.length === 0) {
            setTimeout(() => {
                this.showSortNinjaComplete();
            }, 1000);
        }
    }

    // Show game complete message for Sort Ninja
    showSortNinjaComplete() {
        const gameContainer = document.getElementById('game-container');
        gameContainer.innerHTML = `
            <div class="game-complete">
                <h2>🎉 Ninja Master! 🎉</h2>
                <p>Parfait! You've sorted all the French words into their correct categories!</p>
                <button class="play-again-btn" onclick="location.reload()">Play Again</button>
            </div>
        `;
    }

    // Reset Sort Ninja game
    resetSortNinjaGame() {
        // Reset game state
        this.sortNinjaCards = [];
        this.draggedCard = null;
        
        // Restart the game with the same selected categories
        this.startSortNinjaGame();
    }

    // Utility function to shuffle array
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FrenchLearningGames();
});

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';

        // Utilisation correcte de classList.add
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Tableau qui contiendra toutes les tâches
    let tasks = [];

    // Fonction pour sauvegarder le tableau tasks dans Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Fonction pour créer un élément tâche dans le DOM
    // save paramètre pour éviter de sauvegarder lors du chargement initial
    function addTask(taskText, save = true) {
        if (!taskText.trim()) {
            alert("Please enter a task.");
            return;
        }

        // Créer un nouvel élément li
        const li = document.createElement('li');
        li.textContent = taskText;

        // Créer le bouton remove
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // Événement pour retirer la tâche
        removeBtn.onclick = () => {
            taskList.removeChild(li);
            // Retirer la tâche du tableau
            tasks = tasks.filter(task => task !== taskText);
            saveTasks();
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Si on doit sauvegarder (ajout manuel), mettre à jour tableau et Local Storage
        if (save) {
            tasks.push(taskText);
            saveTasks();
        }

        taskInput.value = '';
    }

    // Fonction pour charger les tâches depuis Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks = storedTasks;
        tasks.forEach(task => addTask(task, false));
    }

    // Chargement initial des tâches sauvegardées
    loadTasks();

    // Ajout via bouton
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Ajout via touche "Entrée"
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
});

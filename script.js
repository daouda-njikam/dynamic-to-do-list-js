// script.js

// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments du DOM
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Fonction pour ajouter une tâche
    function addTask() {
        const taskText = taskInput.value.trim();

        // Vérifier si le champ est vide
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Créer un nouvel élément <li>
        const li = document.createElement('li');
        li.textContent = taskText;

        // Créer le bouton de suppression
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Ajouter un événement de suppression
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Ajouter le bouton au <li>, puis le <li> à la liste
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Réinitialiser le champ de saisie
        taskInput.value = '';
    }

    // Ajouter un événement click sur le bouton
    addButton.addEventListener('click', addTask);

    // Ajouter un événement clavier pour la touche Enter
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

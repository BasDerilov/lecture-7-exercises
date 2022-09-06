export class TaskCard extends HTMLDivElement {
    constructor(title, content) {
        super();
        this.completed = false;
        this.classList.add("col-4");
        //JSX would be useful here :/
        this.innerHTML = `<div class="card mb-3"> <div class="card-body"> <h3 class="card-title">${title}</h3> <p class="card-text">${content}</p> <div class="d-grid gap-2"> <button type="button" class="btn btn-primary"> complete </button> </div> <div class="d-grid gap-2"> <button type="button" class="btn btn-danger mt-3"> delete </button> </div> </div> </div>`;
        const buttons = this.getElementsByClassName("btn");
        this.completeBtn = buttons.item(0);
        this.deleteBtn = buttons.item(1);
        this.titleElement = this.getElementsByClassName("card-title").item(0);
        this.contentElement = this.getElementsByClassName("card-text").item(0);
        this.card = this.getElementsByClassName("card").item(0);
        this.card.classList.add("uncompleted");
        this.deleteBtn.addEventListener("click", () => {
            this.remove();
        });
        this.completeBtn.addEventListener("click", () => {
            if (this.completed) {
                this.uncomplete();
            }
            else {
                this.complete();
            }
        });
    }
    complete() {
        this.titleElement.classList.add("text-decoration-line-through");
        this.contentElement.classList.add("text-decoration-line-through");
        this.card.classList.add("bg-secondary");
        this.card.classList.add("completed");
        this.card.classList.remove("uncompleted");
        this.completeBtn.textContent = "uncomplete";
        this.completed = true;
    }
    uncomplete() {
        this.titleElement.classList.remove("text-decoration-line-through");
        this.contentElement.classList.remove("text-decoration-line-through");
        this.card.classList.remove("bg-secondary");
        this.card.classList.remove("completed");
        this.card.classList.add("uncompleted");
        this.completeBtn.textContent = "complete";
        this.completed = false;
    }
}
window.customElements.define("task-card", TaskCard, {
    extends: "div",
});

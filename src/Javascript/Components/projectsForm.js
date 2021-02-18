import printToDom from '../../Javascript/Helpers/printToDom';
import {projectsFormInfo } from '../../Javascript/Helpers/Data/projectsData';

const projectsForm = () => {
  let formString = `<form>
  <div class="mb-3">
    <div class='form-text fs-3 new-project'>Create a new project</div>
    <div class='form-text'>Coordinate, track and update all in one place, so projects stay transparent and on schedule</div>
    <hr/>
    <label for="projectsForm" class="form-label mt-2 fw-bold new-project">Project board name</label>
    <input type="text" class="form-control bg-transparent border border-secondary w-50 text-secondary" id="project-board-name" aria-describedby="projectBoardNameHelp" placeholder="Example" required>
  </div>
  <div class="mb-3">
    <label for="projectDescription" class="form-label fw-bold new-project">Description (optional)</label>
    <input type="text" class="form-control bg-transparent border border-secondary pb-5 text-secondary" id="project-description">
  </div>
  <button type="submit" class="btn btn-success">Create project</button>
</form>`;

  printToDom("#project-form", formString);
  document.querySelector("form").addEventListener("submit", projectsFormInfo);
};

export default projectsForm;

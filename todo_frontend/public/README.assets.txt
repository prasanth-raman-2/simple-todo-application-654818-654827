This folder is used by Angular's build (angular.json -> assets glob from 'public').
A placeholder file (.keep) is added to ensure the folder exists during CI builds.

Note: The project-specific static design exports are placed at repository root assets/, not bundled into Angular runtime. If you want them served by Angular, copy or link them into this public/assets folder.
